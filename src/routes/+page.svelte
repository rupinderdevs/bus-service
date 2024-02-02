<script>
	import Gallery from '$lib/components/section/Gallery.svelte';
	import Hero from '$lib/components/section/Hero.svelte';
	import Services from '$lib/components/section/Services.svelte';
	// import About from '$lib/components/section/About.svelte';
	import Contact from '$lib/components/section/Contact.svelte';
	import Statistics from '$lib/components/section/Statistics.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Tata Bus" />
</svelte:head>

<section class="px-4 lg:px-20">
	<Hero />
	<!-- <About /> -->
	<Services />
	<Gallery />
	<Statistics />
	<Contact />
</section>
