<script>
	export let pagoData = {};
	const { HEADING, TITLE, IMAGE_URL, MEDIOPAGO, TRANSFERENCIA } = pagoData;
</script>

<section>
	<div
		class="w-full p-8 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
	>
		<h5 class="mb-1 text-3xl font-bold text-gray-900 dark:text-white">{HEADING}</h5>
		<p class="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400" />
		<div class="grid grid-cols-2 divide-x-2">
			<div
				class="grid grid-cols-1 divide-y-8 items-center justify-center space-y-4 sm:flex sm:space-y-4 sm:space-x-16 rtl:space-x-reverse"
			>
            <img src="images/getnet.png" alt="Flecha" class="w-40 h-40 " />

				<ul class="list-none pl-0">
					{#each MEDIOPAGO as list}
						<li class="flex items-center mb-2 text-gray-900">
							<img src="images/green-checkmark-line-icon.png" alt="Flecha" class="w-4 h-4 mr-2" />
							{list}
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<a
					href=""
					class="w-full -mr-1  h-50 w-2 px-4 py-2 sm:w-auto bg-[#cfded8] text-gray-900 rounded-lg inline-flex items-center justify-center"
				>
					<div class="text-left rtl:text-right">
						<div class="-mt-1 font-sans text-sm  text-center font-semibold">Transferencia</div>
                        <br>
                        {#each TRANSFERENCIA as list}
						<div class=" text-xs  text-center sm:shadow-md sm::rounded-sm sm: bg-[#cfded8] sm:p-3 md: bg-[#cfded8]">{list}</div>
                        {/each}
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
