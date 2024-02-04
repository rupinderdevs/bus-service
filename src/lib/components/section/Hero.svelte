<script>
	import { goto } from '$app/navigation';

	// You can add logic or props if needed
	import bus2 from '../../images/buses/dhillon-bus14.jpg';
	import Button from '../ui/Button.svelte';

	const onClick = () => {
		goto('/contact');
	};
</script>

<section class="px-4 lg:px-14 xl:px-18">
	<div class="container mx-auto flex py-4 lg:py-14 xl:py-24 flex-col-reverse md:flex-row items-center">
		<div
			class="lg:flex-grow md:w-1/2 pr-4 gap-4 xl:gap-10 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<h1 class="lg:text-3xl xl:text-5xl text-xl md:text-3xl font-semibold">
				Welcome to <span class="text-primary font-bold">Dhillon Bus</span> - <br /> Your Journey Begins
				Here!
			</h1>
			<p class="text-xs md:text-s leading-relaxed">
				Embark on a seamless travel experience with Dhillon Bus, where comfort, reliability, and
				convenience converge. Explore our world-class bus services and make your journey memorable.
				Book your Tour now and let us take you to your destination in style.
			</p>
			<Button text="Contact Us" classes="my-2" on:click={onClick} />
		</div>
		<div class="xl:max-w-xl xl:w-full md:w-1/2 py-2">
			<img class="object-cover object-center rounded" alt="hero" src={bus2} />
		</div>
	</div>
</section>
