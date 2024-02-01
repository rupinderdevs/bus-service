<script lang="ts">
	import Card from '../ui/Card.svelte';

	import bus1 from '../../images/bus1.jpg';
	import bus2 from '../../images/bus2.jpg';

	let cards: {
		category: string;
		title: string;
		description: string;
		imageSrc: string;
	}[] = [
		{
			category: 'Category',
			title: 'Sleeper Coach',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus1
		},
		{
			category: 'Category',
			title: 'Luxuary Buses',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus2
		},
		{
			category: 'Category',
			title: 'Tourist Buses',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus1
		},
		{
			category: 'Category',
			title: 'Deluxe Coach',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus2
		}
	];
</script>

<section class="text-black">
	<h2 class="text-black text-xl lg:text-5l text-center">Our Services</h2>
	<p class="text-center">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veniam quibusdam error
		consequuntur autem quas laborum sint praesentium earum. Voluptate?
	</p>
	<div class="container px-5 py-6 lg:py-20 mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
			{#each cards as { category, title, description, imageSrc }}
				<Card {category} {title} {description} {imageSrc} />
			{/each}
		</div>
	</div>
</section>
