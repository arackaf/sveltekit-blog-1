import { getTags } from '$lib/data/todoData';

export function load() {
	const tags = getTags();

	return {
		tags
	};
}
