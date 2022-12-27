<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	$: ({ todo, tags } = $page.data);
</script>

<form use:enhance method="post" action="?/editTodo">
	<input value={todo.title} />
	<button>Save</button>
</form>

<style>
	form {
		margin: 30px;
	}

	input {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid black;
	}

	button {
		border-radius: 5px;
		padding: 10px;
	}
</style>
