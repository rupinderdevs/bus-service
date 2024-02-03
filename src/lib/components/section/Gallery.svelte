<script>
	// You can add logic or props if needed

	// import bus1 from '../../images/bus1.jpg';
	// import bus2 from '../../images/bus2.jpg';
	import bus14 from '../../images/buses/dhillon-bus14.jpg';
	import bus11 from '../../images/buses/dhillon-bus11.jpg';
	import bus13 from '../../images/buses/dhillon-bus13.jpg';
	import bus1 from '../../images/buses/dhillon-bus1.jpg';
	import bus12 from '../../images/buses/dhillon-bus12.jpg';
	import bus4 from '../../images/buses/dhillon-bus4.jpg';
</script>

<section class="">
	<h2 class="text-black text-xl lg:text-5l text-center">Featured Buses and Coach Models.</h2>
	<!-- <p class="text-xs lg:text-m w-full md:w-9/12 mx-auto text-center">
		Check some of the recent addition of buses in our fleet. We have all sorts of buses be it a 27
		seater, 45 seater or 54 seater (AC/ Non AC)
	</p> -->
	<div class="container px-4 py-6 lg:py-24 mx-auto flex flex-wrap">
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
