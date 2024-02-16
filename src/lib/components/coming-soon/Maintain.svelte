<script>
	// import { goto } from '$app/navigation';
	import maintain from '$lib/images/maintain.jpg';
	// import Carousel from '../carousel/Carousel.svelte';
	// import Button from '../ui/Button.svelte';

	// const onClick = () => goto('/contact');
</script>

<!-- <section class="px-4 lg:px-14 xl:px-18 h-full  bg-map bg-no-repeat bg-unset md:bg-right"> -->
<div class="centered-image">
	<img class="flex items-center justify-center mx-auto" src={maintain} alt="maintaince" />
</div>

<!-- </section> -->

<style>
	.centered-image {
		display: flex;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		height: 100vh; /* Adjust the height as needed */
	}
</style>
