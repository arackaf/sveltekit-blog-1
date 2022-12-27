import { fail, redirect } from '@sveltejs/kit';
import { getTodo, updateTodo, wait } from '$lib/data/todoData';

export function load({ url }) {
	const id = url.searchParams.get('id');

	console.log(id);
	const todo = getTodo(id);

	return {
		todo
	};
}

export const actions = {
	async editTodo({ request }) {
		const formData = await request.formData();

		const id = formData.get('id');
		const newTitle = formData.get('title');

		await wait(250);
		updateTodo(id, newTitle);

		throw redirect(303, '/list');
	}
};
