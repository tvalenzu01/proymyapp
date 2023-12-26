<script>
	export let bannerData = {};
	const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section class="bg-[#ebc9c8] light-color" id="banner">
	<div
		class="relative pt-16 pb-32 flex content-center items-center justify-center"
		style="min-height: 75vh;"
	>
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover"
			style="background-image: url('./images/sillon3.jpg'); "
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black" />
		</div>
		<div class="container relative mx-auto">
			<div class="items-center flex flex-wrap">
				<div class="w-full lg:w-6/24 px-4 ml-auto mr-auto text-center">
					<div class="pr-6">
						<h1 class="text-white font-semibold text-5xl">
							{HEADING}
						</h1>
						<p class="mt-4 text-lg text-white">
							{DECRIPTION}
						</p>
						<a href={TUTORIAL_URL} target="_blank" class="text-white">
							<i class="far text-white fa-play-circle fa-2x " />
							{WATCH_TUTORIAL}
						</a>
						<!-- <div class="col-md-6">
                  <img src="./images/sonrisa1.jpg" alt="" class="img-fluid" loading="lazy"/>
                </div> -->
					</div>
				</div>
			</div>
		</div>
		<div
			class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
			style="height: 70px; transform: translateZ(0px);"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
			</svg>
		</div>
	</div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
