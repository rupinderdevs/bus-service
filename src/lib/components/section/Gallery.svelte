<script>
	// You can add logic or props if needed

	// import bus1 from '../../images/bus1.jpg';
	// import bus2 from '../../images/bus2.jpg';
	import bus14 from '../../images/buses/dhillon-bus14.webp';
	import bus11 from '../../images/buses/dhillon-bus11.webp';
	import bus13 from '../../images/buses/dhillon-bus13.webp';
	import bus1 from '../../images/buses/dhillon-bus1.webp';
	import bus12 from '../../images/buses/dhillon-bus12.webp';
	import bus4 from '../../images/buses/dhillon-bus4.webp';
	import Heading from '../ui/Heading.svelte';
</script>

<section id="gallery" class="background">
	<section class="px-4 lg:px-14 xl:px-18">
		<Heading title="Discover Our Top-of-the-Line Buses" class="text-white !pb-0" />
		<div class="container px-4 pt-4 lg:pt-20 mx-auto flex flex-wrap">
			<div class="flex flex-wrap md:-m-2 -m-1">
				<div class="flex flex-wrap w-full lg:w-1/2">
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus14} />
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus1} />
					</div>
					<div class="md:p-2 p-1 w-full">
						<img alt="gallery" class="w-full h-full object-cover object-center block" src={bus11} />
					</div>
				</div>
				<div class="flex flex-wrap w-full lg:w-1/2">
					<div class="md:p-2 p-1 w-full">
						<img alt="gallery" class="w-full h-full object-cover object-center block" src={bus13} />
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus4} />
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus12} />
					</div>
				</div>
			</div>
		</div>
	</section>
</section>

<style>
	.background {
		background-color: #05579b;
		padding: 3rem 0;
		color: #fff;
		background-image: repeating-linear-gradient(
			135deg,
			#05579b 0,
			#5688d2 2px,
			transparent 0,
			transparent 50%
		);
		background-size: 10px 10px;
	}
</style>
