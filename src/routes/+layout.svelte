<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/list">Todo list</a>
		</li>
		<li>
			<a href="/admin/paid-status">Account status</a>
		</li>
		<li>
			<a href="/admin/user-settings">User settings</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		background-color: beige;
	}
	nav ul {
		display: flex;
	}
	li {
		list-style: none;
		margin: 15px;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
