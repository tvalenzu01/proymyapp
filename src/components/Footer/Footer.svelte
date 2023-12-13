<script>
	export let footerData = {};

	const { DESCRIPTION, CONTACT_DETAILS, SUBSCRIBE_NEWSLETTER, SUBSCRIBE } = footerData;

	const { HEADING, ADDRESS, MOBILE, EMAIL, FIJO1, FIJO2, ATENCION, HORARIO } = CONTACT_DETAILS;
</script>

<section id="footer">
	<nav id="footer" class="bg-[#ebc9c8]">
		<!-- start container -->
		<div class="  px-10 pt-8 pb-4">
			<div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
				<div
					class="pl-0 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2
            lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-2"
				>
					<!-- Column 2 Content -->
					<br />

					<h4 class="text-gray-700"><strong>Contacto</strong></h4>
					<ul class="">
						<li id="navi-2" class="leading-7 text-sm">
							<a class=" text-gray-700 text-small">
								{ADDRESS}
							</a>
						</li>
						<li id="navi-1" class="leading-7 text-sm">
							<a class="text-gray-700 text-small">Movil</a>
							<a
								class="uppercase font-bold leading-snug text-gray-700 underline text-small hover:opacity-75"
								href="tel:{MOBILE}">{MOBILE} llamar</a
							>
						</li>
					</ul>
				</div>

				<div
					class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6"
				>
					<br />
					<h4 class="text-gray-700"><strong>Infomación adicional</strong></h4>
					<ul class="">
						<li id="navi-1" class="leading-7 text-sm">
							<a class=" text-gray-700 text-small">Whatsapp</a>
							<a
								class="text-xm uppercase font-bold text-gray-700 leading-snug t underline hover:opacity-75"
								title="Click para chatear"
								href="https://api.whatsapp.com/send?phone={MOBILE}&text=Me%20gustaría%20una%20evaluación%20de%20Implantes"
								target="_blank"
								rel="noopener">Envíanos un mensaje</a
							>
						</li>
						<li id="navi-1" class="leading-7 text-sm">
							<a class="text-gray-700 text-small">Email</a>
							<a
								class="text-xm uppercase text-gray-700 font-bold leading-snug underline hover:opacity-75"
								title="Click para Email"
								href="mailto:drapaulaulloa@gmail.com?subject=Consulta%20Implantes%20y%20Rehabilitacion"
								target="_blank"
								rel="noopener">Envíanos un Email</a
							>
						</li>
					</ul>
				</div>

				<div
					class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6"
				>
					<!-- Column 4 Content -->

					<h4 class=""><strong>Horario de atención</strong></h4>
					<ul class="">
						<li id="navi-2" class="leading-7 text-sm">
							<a class=" text-gray-700 text-small">
								{ATENCION}
							</a>
						</li>
						<li id="" class="leading-7 text-sm">
							<a class=" text-gray-700">{HORARIO}</a>
						</li>
					</ul>
				</div>
			</div>

			<!-- Start footer bottom -->
			<div class="container">
				<iframe
					class="responsive-iframe"
					src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Arauco%20561,%20oficina%20612%20Mall%20plaza%20los%20rios+(Dra%20Paula%20Ulloa%20Diaz)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				/>
			</div>

			<!-- end container -->
		</div>

		<div class="pt-4 md:flex md:items-center md:justify-center" style="border-top:1px solid white">
			<ul class="">
				<li class="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
					<a class=" text-center underline text-small" href="/"></a>
				</li>
			</ul>
		</div>
	</nav>
</section>

<style>
	.container {
		position: relative;
		width: 100%;
		overflow: hidden;
		padding-top: 56.25%;
		/* 16:9 Aspect Ratio */
	}

	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
