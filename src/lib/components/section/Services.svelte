<script lang="ts">
	import Card from '../ui/Card.svelte';

	// import bus14 from '../../images/buses/dhillon-bus14.jpg';
	import bus11 from '../../images/buses/dhillon-bus11.jpg';
	// import bus13 from '../../images/buses/dhillon-bus13.jpg';
	import bus7 from '../../images/buses/dhillon-bus7.jpg';
	import bus15 from '../../images/buses/dhillon-bus15.jpg';
	import bus4 from '../../images/buses/dhillon-bus4.jpg';

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
			imageSrc: bus15
		},
		{
			category: 'Category',
			title: 'Luxuary Buses',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus7
		},
		{
			category: 'Category',
			title: 'Tourist Buses',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus11
		},
		{
			category: 'Category',
			title: 'Deluxe Coach',
			description: 'Best in Class Features and Pleasing Interiors.',
			imageSrc: bus4
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
