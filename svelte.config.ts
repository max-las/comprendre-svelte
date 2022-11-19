import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import type { Config } from '@sveltejs/kit';

const config: Config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
