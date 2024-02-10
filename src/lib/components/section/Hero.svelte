<script>
	import { goto } from '$app/navigation';
	import bus2 from '$lib/images/buses/dhillon-bus14.webp';
	// import Carousel from '../carousel/Carousel.svelte';
	import Button from '../ui/Button.svelte';

	const onClick = () => goto('/contact');
</script>

<section class="px-4 lg:px-14 xl:px-18 bg-map bg-no-repeat bg-unset md:bg-right">
	<!-- <Carousel arrows={false}> -->
	<div class="flex py-4 lg:py-14 flex-col-reverse md:flex-row items-center">
		<div
			class="lg:flex-grow md:w-1/2 pr-4 gap-4 xl:gap-10 flex flex-col md:items-start text-justify md:text-left"
		>
			<h1
				class="lg:text-3xl xl:text-7l text-xl md:text-3xl font-semibold leading-normal lg:leading-10"
			>
				Welcome to <span class="text-primary font-bold">Dhillon Bus</span> Your Journey Begins Here!
			</h1>
			<p class="text-s lg:text-m leading-relaxed">
				Embark on a seamless travel experience with Dhillon Bus, where comfort, reliability, and
				convenience converge. Explore our world-class bus services and make your journey memorable.
				Book your Tour now and let us take you to your destination in style. Choose us for a journey
				that seamlessly blends strength, reliability, and modern comfort
			</p>

			<Button text="Contact Us" classes="my-2" on:click={onClick} />
		</div>
		<div class="xl:max-w-xl xl:w-full md:w-1/2 py-2">
			<img class="object-cover object-center rounded" alt="hero" src={bus2} />
		</div>
	</div>
	<!-- </Carousel> -->
</section>
