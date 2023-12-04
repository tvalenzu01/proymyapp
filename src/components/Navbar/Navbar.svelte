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

<header class=" bg-[#ebc9c8] p-2 place-items-end  text-xl font-semibold border-b-0 ">
	<Menu navlists={DATA.NAVBAR_DATA} />
</header>

