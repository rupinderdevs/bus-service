<script lang="ts">
	import { cards } from '$lib/data';
	import Card from '../ui/Card.svelte';
	import Heading from '../ui/Heading.svelte';
</script>

<section class="py-6 lg:py-20 px-4 lg:px-14 xl:px-18">
	<!-- <p class="text-center">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veniam quibusdam error
		consequuntur autem quas laborum sint praesentium earum. Voluptate?
	</p> -->
	<div class="mx-auto">
		<!-- <h2 class="text-black text-xl lg:text-5l text-center pb-4">Our Services</h2> -->
		<!-- <h2 class="text-black text-xl lg:text-5xl text-center pb-4 relative">
    Our Services
    <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
</h2> -->
		<Heading title="Our Services" />

		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
			{#each cards as { category, title, description, imageSrc }}
				<Card {category} {title} {description} {imageSrc} />
			{/each}
		</div>
	</div>
</section>
