<script lang="ts">
	// import Button from '../ui/Button.svelte';
	import aboutus from '$lib/images/buses/dhillon-bus15.jpg';
</script>

<section id="about" class="">
	<div class="about text-black">
		<div class="mx-auto">
			<div class="flex flex-col md:flex-row mx-4 lg:mx-16 xl:mx-32">
				<div class="w-full md:w-7/12 about-sec bg-gray-90 text-white p-4 pb-4 lg:p-10 xl:p-16 xl:pb-0">
					<h1 class="heading text-left text-3xl mb-4">About Us</h1>
					<p class="text-left mb-4">
						Dhillon Bus stands as a prominent force in the bus rental industry in Punjab. Our
						commitment to enhancing the travel experience is evident through the continuous upgrades
						to our extensive fleet, ensuring our customers enjoy a journey marked by comfort and
						convenience.
					</p>
					<p class="text-left">
						We takes pride in being the top choice for both tourists and meticulous journey
						planners. Our buses are meticulously crafted, incorporating cutting-edge technology to
						provide the highest level of comfort to our passengers. Choose us for a journey that
						seamlessly blends strength, reliability, and modern comfort
					</p>
					<!-- <Button lg class="justify-center" text="Read More" /> -->
				</div>
				<div class="md:w-7/12 about-img">
					<img src={aboutus} alt="Dhillon Bus" class="w-full h-full" />
				</div>
			</div>
		</div>
	</div>

	<div class="cont-us py-10 lg:py-20 mb-6 xl:mb-20">
		<div class="text-white px-4 lg:px-14 xl:px-18 text-center">
			<h1 class="text-2xl lg:text-4xl uppercase tracking-wider">Travel Safe with Us</h1>
			<p class="text-lg"></p>
			<!-- <Button variant="primary" lg class="justify-center" text="Contact Us" /> -->
		</div>
	</div>
</section>

<style>
	.about {
		padding: 3rem 0;
		float: left;
		width: 100%;
		text-align: center;
		background: linear-gradient(
			-45deg,
			#eee 25%,
			#f3f3f3 25.1%,
			#f3f3f3 50%,
			#eee 50.1%,
			#eee 75%,
			#f3f3f3 75.1%,
			#f3f3f3 0
		);
		background-size: 10px 10px;
	}

	.about .about-sec {
		/* padding: 4rem 4rem 0 4rem; */
		letter-spacing: 1px;
	}
	.cont-us {
		background: linear-gradient(rgba(5, 87, 155, 0.9), rgba(217, 162, 27, 0.9)),
			url('../../images/buses/dhillon-bus13.jpg');
		width: 100%;
		width: 100%;
		float: left;
		background-size: cover;
		background-position: bottom;
		background-attachment: fixed;
	}
</style>
