<script>
	export let data;
	$: ({ todos, tags } = data);
</script>

<table cellspacing="10" cellpadding="10">
	<thead>
		<tr>
			<th>Task</th>
			<th>Tags</th>
			<th>Assigned</th>
			<th>Edit</th>
		</tr>
	</thead>
	<tbody>
		{#each todos as t}
			<tr>
				<td>{t.title}</td>
				<td>{t.tags.map(id => tags[id].name).join(', ')}</td>
				<td>{t.assigned}</td>
				<td><a href="/details?id={t.id}">Edit</a></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		text-align: left;
	}
</style>
