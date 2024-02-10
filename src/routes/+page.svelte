<script>
	import Gallery from '$lib/components/section/Gallery.svelte';
	import Hero from '$lib/components/section/Hero.svelte';
	import Services from '$lib/components/section/Services.svelte';
	import About from '$lib/components/section/About.svelte';
	import Contact from '$lib/components/section/Contact.svelte';
	import Testimonials from '$lib/components/section/Testimonials.svelte';
</script>

<svelte:head>
	<title>Dhillon Bus - Travel Safe with us</title>
	<meta name="description" content="Dhillon Bus in your service" />
</svelte:head>

<section class="">
	<Hero />
	<About />
	<Services />
	<Gallery />
	<Testimonials />
	<Contact />
</section>
