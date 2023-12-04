<script>
	// import Table from '../components/Table.svelte';
	import DATA from '../components/Datalandpg/data';
	import Banner from '../components/Banner/Banner.svelte';
	import Services from '../components/Services/Services.svelte';
	import Whyus from '../components/Whyus/Whyus.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Contactanos from '../components/Contactanos/contactanos.svelte';
</script>

<svelte:head>
	<meta name="description" content="Dra Paula Ulloa" />
</svelte:head>
<section>
	<div class="text-gray-700 body-font bg-[#cfded8]">
		<div class="mx-auto">
			<Contactanos/>
			<Banner bannerData={DATA.BANNER_DATA} />
			<Services serviceData={DATA.SERVICE_DATA} />
			<Whyus aboutData={DATA.ABOUT_DATA} />
			<Footer footerData={DATA.FOOTER_DATA} />
		</div>
	</div>
</section>
