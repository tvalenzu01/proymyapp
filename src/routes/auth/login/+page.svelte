<script>
	import { page } from '$app/stores';

	import Navbar from '../../../components/Navbar/Navbar.svelte';
	import Sidebar from '../../../components/Navbar/Sidebar.svelte';
	

	let loaded = false;
	let open = false;
</script>

<h1>SvelteKit Auth Example</h1>
<p>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button on:click={() => ""} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() =>"" }>Sign In with GitHub</button>
	{/if}
</p>

<div>
	<header>
		<div class="signedInStatus">
			<p class="nojs-show loaded">
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
					{/if}
					<span class="signedInText">
						<small>Signed in as</small><br />
						<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
					</span>
					<a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
				{:else}
					<span class="notSignedInText">You are not signed in</span>
					<a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a>
				{/if}
			</p>
		</div>
		<nav>
			<ul class="navItems">
				<li class="navItem"><a href="/">Home</a></li>
				<li class="navItem"><a href="/protected">Protected</a></li>
			</ul>
		</nav>
	</header>
	<slot />
</div>
