import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';

export const selectedCompetitor: Writable<string | null> = writable(null);
