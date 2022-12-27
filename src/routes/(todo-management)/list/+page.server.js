import { getTodos, getTags } from '$lib/data/todoData';

export function load() {
	const todos = getTodos();
	const tags = getTags();

	return {
		todos,
		tags
	};
}
