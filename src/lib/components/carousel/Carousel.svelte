<script lang="ts">
	import { onMount } from 'svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import './style.css';
	import SvgIcon from '../ui/SvgIcon.svelte';

	export let arrows = false;
	export let dots = true;
	export let autoplay = false;
	export let infinite = true;
	export let autoplayDuration = 2000;
	

	let particlesToShow = 1;

	let carousel: Carousel;

	// Function to update particlesToShow based on screen width
	const updateParticlesToShow = () => {
		const screenWidth = window.innerWidth;

		// Adjust particlesToShow based on screen width
		if (screenWidth >= 1200) {
			particlesToShow = 3; // Show 3 particles on larger screens
			arrows = true;
		} else if (screenWidth >= 768) {
			particlesToShow = 2; // Show 2 particles on medium-sized screens
		} else {
			particlesToShow = 1; // Show 1 particle on smaller screens
		}
	};

	// Call the function on component mount and window resize
	onMount(() => {
		updateParticlesToShow();

		window.addEventListener('resize', updateParticlesToShow);
	});
</script>

{#if browser}
	<Carousel
		bind:this={carousel}
		{particlesToShow}
		{arrows}
		{dots}
		{autoplay}
		{infinite}
		{autoplayDuration}
	>
		<slot />
		<!-- <div slot="dots" /> -->
		<div slot="prev" class="hidden lg:flex justify-center items-center">
			<button
				on:click={() => carousel.goToPrev()}
				class="group border cursor-pointer border-secondary rounded-full p-2 grid place-content-center hover:bg-secondary transition-color duration-500 disabled:bg-red"
			>
				<SvgIcon
					name="Arrow"
					class="w-3 h-3 lg:w-6 lg:h-6 fill-secondary group-hover:fill-white transition-color duration-500 rotate-180"
				/>
			</button>
		</div>
		<div slot="next" class="flex justify-center items-center">
			<button
				on:click={() => carousel.goToNext()}
				class="group border cursor-pointer border-secondary rounded-full p-2 grid place-content-center hover:bg-secondary transition-color duration-500 disabled:bg-red"
			>
				<SvgIcon
					name="Arrow"
					class="w-3 h-3 lg:w-6 lg:h-6 fill-secondary group-hover:fill-white transition-color duration-500"
				/>
			</button>
		</div>
	</Carousel>
{/if}
