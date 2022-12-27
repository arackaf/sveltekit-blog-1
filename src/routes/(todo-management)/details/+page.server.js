import { getTodo } from '$lib/data/todoData';

export function load({ url }) {
	const id = url.searchParams.get('id');

	console.log(id);
	const todo = getTodo(id);

	return {
		todo
	};
}

export const actions = {
	async editTodo() {
		return {};
	}
};
