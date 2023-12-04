<script>
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar/Navbar.svelte';
	import Sidebar from '../components/Navbar/Sidebar.svelte';

	let loaded = false;
	let open = false;
</script>

<header>
	<Navbar bind:sidebar={open} />
	<Sidebar bind:open />
</header>

