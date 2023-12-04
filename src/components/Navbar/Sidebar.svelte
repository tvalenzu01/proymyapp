<script>
	export let open = false;
	import DATA from '../Datalandpg/data';
	export let navlists = DATA.NAVBAR_DATA;
</script>

<aside class="absolute w-full h-full bg-pink-400 shadow-lg" class:open>
	<br />
	<br />
	<br />
	<nav>
		<ul>
			{#each navlists as list}
				<li class="mr-3">
					<a
						class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 hover:no-underline"
						href={list.url}
					>
						{list.label}
					</a>
				</li>
			{/each}

			<li>
				<a
					class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
					href="/auth/login"
				>
					<i class="fas fa-cog text-lg leading-lg text-white opacity-75" /> Perfil
				</a>
			</li>

			<li>
				<a
					class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
					href="/auth/login"
				>
					<i class="fas fa-user text-lg leading-lg text-white opacity-75" /> Conectar
				</a>
			</li>
		</ul>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;

		width: 10%;
		position: absolute;
		top: 1%;
		bottom: 97%;
	}

	.open {
		left: 0;
	}
</style>
