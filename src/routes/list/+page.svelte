<script>
	import { page } from '$app/stores';

	$: ({ todos, tags } = $page.data);
</script>

<table cellspacing="10" cellpadding="10">
	<thead>
		<tr>
			<th>Task</th>
			<th>Tags</th>
			<th>Assigned</th>
		</tr>
	</thead>
	<tbody>
		{#each todos as t}
			<tr>
				<td>{t.title}</td>
				<td>{t.tags.map((id) => tags[id].name).join(', ')}</td>
				<td>{t.assigned}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		text-align: left;
	}
</style>
