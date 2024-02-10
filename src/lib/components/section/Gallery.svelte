<script lang="ts">
	import bus14 from '$lib/images/buses/dhillon-bus14.webp';
	import bus11 from '$lib/images/buses/dhillon-bus11.webp';
	import bus19 from '$lib/images/buses/dhillon-bus19.webp';
	import bus7 from '$lib/images/buses/dhillon-bus7.webp';
	import bus12 from '$lib/images/buses/dhillon-bus12.webp';
	import bus4 from '$lib/images/buses/dhillon-bus4.webp';
	import Heading from '../ui/Heading.svelte';
	import Button from '../ui/Button.svelte';
	import { goto } from '$app/navigation';

	const onClick = () => {
		goto('/gallery');
	};
</script>

<section id="gallery" class="background">
	<section class="px-4 lg:px-14 xl:px-18">
		<Heading title="Journey Through Our Fleet: Bus Image Gallery" class="text-white !pb-0" />
		<p class="text-xs text-white text-center pt-2">At Dhillon Bus, we take pride in offering top-notch transportation solutions tailored to meet your needs. Our diverse fleet of buses is equipped with modern amenities, ensuring comfort, safety, and reliability for every journey. Explore our gallery below to discover the range of buses we have available for various transportation needs.</p>
		<div class="container px-4 pt-4 lg:pt-10 mx-auto flex flex-wrap">
			<div class="flex flex-wrap md:-m-2 -m-1">
				<div class="flex flex-wrap w-full lg:w-1/2">
					<div class=" md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full rounded-md object-cover h-full object-center block"
							src={bus14}
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full rounded-md object-cover h-full object-center block"
							src={bus4}
						/>
					</div>
					<div class="md:p-2 p-1 w-full">
						<img
							alt="gallery"
							class="w-full h-full rounded-md object-cover object-center block"
							src={bus11}
						/>
					</div>
				</div>
				<div class="flex flex-wrap w-full lg:w-1/2">
					<div class="md:p-2 p-1 w-full">
						<img
							alt="gallery"
							class="w-full h-full rounded-md object-cover object-center block"
							src={bus19}
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full rounded-md object-cover h-full object-center block"
							src={bus7}
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full rounded-md object-cover h-full object-center block"
							src={bus12}
						/>
					</div>
				</div>
			</div>
		</div>
		<Button text="View More" classes="my-2 mx-auto mt-6" on:click={onClick} />
	</section>
</section>

<style>
	.background {
		background-color: #101010;
		padding: 3rem 0;
		color: #fff;
		background-image: repeating-linear-gradient(
			135deg,
			#181818 0,
			#161616 1px,
			transparent 0,
			transparent 50%
		);
		background-size: 10px 10px;
	}
</style>
