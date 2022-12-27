let _todos = [
	{ id: 1, title: 'Write SvelteKit intro blog post', assigned: 'Adam', tags: [1] },
	{ id: 2, title: 'Write SvelteKit advanced data loading blog post', assigned: 'Adam', tags: [1] },
	{ id: 3, title: 'Prepare RenderATL talk', assigned: 'Adam', tags: [2] },
	{ id: 4, title: 'Fix all SvelteKit bugs', assigned: 'Rich', tags: [3] },
	{ id: 5, title: "Edit Adam's blog posts", assigned: 'Geoff', tags: [4] }
];

let _tags = [
	{ id: 1, name: 'SvelteKit Content', color: 'ded' },
	{ id: 2, name: 'Conferences', color: 'purple' },
	{ id: 3, name: 'SvelteKit Development', color: 'pink' },
	{ id: 4, name: 'CSS-Tricks Admin', color: 'blue' }
];

const wait = async () => new Promise((res) => setTimeout(res, 100));

export async function todos() {
	await wait();

	return { todos: _todos };
}

export async function tags() {
	await wait();

	return { tags: _tags };
}

export async function todo(id: number) {
	return _todos.find((t) => t.id == id);
}
