<script>
	export let aboutData = {};

	const { HEADING, TITLE, IMAGE_URL, WHY_CHOOSE_US_LIST } = aboutData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<svelte:head>
	<title>Porque Elegirnos?</title>
</svelte:head>
<section class="-mt-48 bg-[#cfded8] " id="Why-us">
	<div class="flex flex-wrap items-center mt-32">
		<div class="w-full px-4 ml-auto mr-auto md:w-5/12">
			<div
				class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg"
			>
				<i class="text-xl fas fa-user-friends" />
			</div>
			<h3 class="mb-2 text-3xl font-semibold leading-normal">{HEADING}</h3>
			<p class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
				{TITLE}
			</p>
			<p class="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700" />
			<ul>
				{#each WHY_CHOOSE_US_LIST as list}
					<li class="mt-4 font-bold text-gray-800">{list}</li>
				{/each}
			</ul>
		</div>
		<div class="w-full px-4 ml-auto mr-auto md:w-4/12">
			<div
				class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-[#ebc9c8] rounded-lg shadow-lg"
			>
				<img
					alt="..."
					loading="lazy"
					src="./images/implante2.png"
					class="align-middle rounded-t-lg w-30"
				/>
				<blockquote class="bg-[#ebc9c8] relative p-8 mb-4">
					<svg
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 583 95"
						class="absolute left-0 block w-full"
						style="height: 95px; top: -94px;"
					>
						<polygon points="-30,95 583,95 583,65" class="bg-[#ebc9c8] fill-current" />
					</svg>
					<h4 class="bg-[#ebc9c8] text-xl font-bold  ">GARANTÍA DE POR VIDA</h4>
					<p class="bg-[#ebc9c8] mt-2 font-light  text-md">
						(tornillo de Titanio integrado al hueso) siempre que se cumpla con indicaciones y
						controles. Sólo utilizamos materiales de reconocida calidad
					</p>
				</blockquote>
			</div>
		</div>
	</div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
