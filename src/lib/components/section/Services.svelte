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
			title: 'Tourist Services',
			description:
				'Discover the beauty of every destination with our specialized tourist services. Enjoy panoramic views, comfortable seating, and a curated travel experience that caters to the wanderlust in you.',
			imageSrc: bus15
		},
		{
			category: 'Category',
			title: 'Local Bus Routes:',
			description: `Navigate your city effortlessly with Dhillon Bus extensive local bus routes.Whether you're going to work every day or running a quick errand on the weekend, our buses are here to make your city travel comfortable.`,
			imageSrc: bus7
		},
		{
			category: 'Category',
			title: 'Comfortable Fleet',
			description:
				'Travel in style with our modern and well-maintained fleet of buses. From luxury coaches to efficient shuttles, we have a variety of options to cater to your comfort preferences.',
			imageSrc: bus11
		},
		{
			category: 'Category',
			title: 'Cost-Effective',
			description:
				'We Provide budget-friendly bus rental services, offering competitive pricing. Our fleet is meticulously constructed with cutting-edge technology, ensuring the highest level of comfort for our passengers..',
			imageSrc: bus4
		}
	];
</script>

<section>
	<h2 class="text-black text-xl lg:text-5l text-center">Our Services</h2>
	<!-- <p class="text-center">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veniam quibusdam error
		consequuntur autem quas laborum sint praesentium earum. Voluptate?
	</p> -->
	<div class="container px-5 py-6 lg:py-20 mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
			{#each cards as { category, title, description, imageSrc }}
				<Card {category} {title} {description} {imageSrc} />
			{/each}
		</div>
	</div>
</section>
