<script>
	// You can add logic or props if needed

	import bus1 from '../../images/bus1.jpg';
	import bus2 from '../../images/bus2.jpg';
</script>

<section class="text-black px-4 xl:px-20">
	<h2 class="text-black text-xl lg:text-5l text-center">Featured Buses and Coach Models.</h2>
	<p class="text-xs lg:text-m w-full md:w-9/12 mx-auto text-center">
		Tata Bus takes pride in being the top choice for both tourists and meticulous journey planners. Our buses are meticulously crafted, incorporating cutting-edge technology to provide the highest level of comfort to our passengers. Choose us for a journey that seamlessly blends strength, reliability, and modern comfort.
	</p>
	<div class="container px-4 py-24 mx-auto flex flex-wrap">
		<div class="flex flex-wrap md:-m-2 -m-1">
			<div class="flex flex-wrap w-full lg:w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus2} />
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus1} />
				</div>
				<div class="md:p-2 p-1 w-full">
					<img alt="gallery" class="w-full h-full object-cover object-center block" src={bus2} />
				</div>
			</div>
			<div class="flex flex-wrap w-full lg:w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img alt="gallery" class="w-full h-full object-cover object-center block" src={bus1} />
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus2} />
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img alt="gallery" class="w-full object-cover h-full object-center block" src={bus1} />
				</div>
			</div>
		</div>
	</div>
</section>
