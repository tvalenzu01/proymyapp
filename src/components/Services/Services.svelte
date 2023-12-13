<script>
	export let serviceData = {};
	const { HEADING, ALL_SERVICES, SERVICE_LIST } = serviceData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<svelte:head>
	<title>Servicios</title>
</svelte:head>
<section class="pb-20 bg-[#cfded8] -mt-24" id="services">
	<div class="container mx-auto px-8">
		<div class="flex flex-wrap">
			{#each SERVICE_LIST as list}
				<div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
					<div
						class="relative flex flex-col min-w-0 break-words bg-white w-full
            mb-8 shadow-lg rounded-lg"
					>
						<div class="px-4 py-4 flex-auto">
							<div
								class="text-white p-3 text-center inline-flex items-center
                justify-center w-40 h-40 mb-5 shadow-lg rounded-full
                bg-[#ebc9c8] "
							>
								<!-- <i class="fas fa-tooth" /> -->
								<img src="{list.URL}" class="object-contain rounded-full shadow-lg" alt="Implante dental">
							</div>
							<h6 class="text-xl font-semibold">{list.LABEL}</h6>
							<p class="mt-2 mb-4 text-gray-600">{list.DESCRIPTION}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
