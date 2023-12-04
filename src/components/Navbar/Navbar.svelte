<script>
	import Logo from './Logo.svelte';
	import Hamburger from './Hamburger.svelte';
	import Main from './Main.svelte';
	import Menu from './Menu.svelte';
	export let sidebar = false;

	import DATA from '../Datalandpg/data';
</script>

<svelte:head>
	<title>Nav</title>
</svelte:head>

<header class="flex justify-between bg-[#ebc9c8] p-2 items-center  text-xl font-semibold border-b-2">
	 <nav class="flex">
		<!-- <Hamburger bind:open={sidebar} /> -->
		<Logo />
	</nav> 

	<Menu navlists={DATA.NAVBAR_DATA} />

	<!--
		<Main/>
-->
</header>
