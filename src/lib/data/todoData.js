let todos = [
	{ id: 1, title: 'Write SvelteKit intro blog post', assigned: 'Adam', tags: [1] },
	{ id: 2, title: 'Write SvelteKit advanced data loading blog post', assigned: 'Adam', tags: [1] },
	{ id: 3, title: 'Prepare RenderATL talk', assigned: 'Adam', tags: [2] },
	{ id: 4, title: 'Fix all SvelteKit bugs', assigned: 'Rich', tags: [3] },
	{ id: 5, title: "Edit Adam's blog posts", assigned: 'Geoff', tags: [4] }
];

let tags = [
	{ id: 1, name: 'SvelteKit Content', color: 'ded' },
	{ id: 2, name: 'Conferences', color: 'purple' },
	{ id: 3, name: 'SvelteKit Development', color: 'pink' },
	{ id: 4, name: 'CSS-Tricks Admin', color: 'blue' }
];

const wait = async () => new Promise((res) => setTimeout(res, 100));

export async function getTodos() {
	await wait();

	return todos;
}

export async function getTags() {
	await wait();

	return tags.reduce((lookup, tag) => {
		lookup[tag.id] = tag;
		return lookup;
	}, {});
}

export async function getTodo(id) {
	return todos.find((t) => t.id == id);
}
