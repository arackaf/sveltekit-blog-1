import { todos } from '$lib/data/todoData';

export function load() {
	const result = todos();

	return {
		todos: result
	};
}
