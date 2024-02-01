<script>
	import Gallery from '$lib/components/section/Gallery.svelte';
	import Hero from '$lib/components/section/Hero.svelte';
	import Services from '$lib/components/section/Services.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Dhillon Bus" />
</svelte:head>

<section>
	<Hero />
	<Services />
	<Gallery />
</section>
