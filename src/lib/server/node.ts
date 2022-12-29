import { readFileSync } from "node:fs";
import { getHighlighter } from "shiki";
import type { Lang } from "shiki";

const readLibFile = (ref: string) => readFileSync(`src/lib/${ref}`, "utf8");

const filenameToCamelCase = (filename: string) =>
  filename.replace(/([.-][a-z])/g, (group: string) =>
    group.toUpperCase().replace(/[.-]/, '')
  );

type FileToHighlight = {
  libPath: string;
  lang: Lang;
};

const highlightLibFiles = async (files: FileToHighlight[]) => {
  const highlighter = await getHighlighter({
    theme: "dracula",
    langs: [...new Set(files.map(file => file.lang))]
  });

  const keyVals = files.map(file => {
    const splitPath = file.libPath.split("/");
    const name = filenameToCamelCase(splitPath[splitPath.length - 1]);
    const code = readLibFile(file.libPath);
    const highlightedCode = highlighter.codeToHtml(code, { lang: file.lang });

    return [name, highlightedCode];
  });

  return Object.fromEntries(keyVals);
};

export { highlightLibFiles };
