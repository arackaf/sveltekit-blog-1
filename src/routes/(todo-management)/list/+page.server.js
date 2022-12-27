import { getTodos, getTags } from '$lib/data/todoData';

export function load() {
	const todos = getTodos();

	return {
		todos
	};
}
