<script>
	// import { goto } from '$app/navigation';
	import maintain from '$lib/images/maintain.jpg';
	import payment from '$lib/images/payment.jpg';
	import payment2 from '$lib/images/payment2.jpg';

	import { onMount } from 'svelte';

	let images = [maintain, payment, payment2];
	let currentIndex = 0;

	const changeImage = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	onMount(() => {
		const interval = setInterval(changeImage, 2000);

		// Clear the interval when the component is unmounted
		return () => clearInterval(interval);
	});
</script>

<!-- <section class="px-4 lg:px-14 xl:px-18 h-full  bg-map bg-no-repeat bg-unset md:bg-right"> -->
<div class="centered-image">
	 <img class="flex items-center justify-center mx-auto" src={images[currentIndex]} alt="Maintain payment" />
	<!-- <img class="flex items-center justify-center mx-auto" src={maintain} alt="maintaince" />
	<img class="flex items-center justify-center mx-auto" src={payment} alt="maintaince" />
	<img class="flex items-center justify-center mx-auto" src={payment2} alt="maintaince" /> -->
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
