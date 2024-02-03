<script lang="ts">
	// import { text } from '@sveltejs/kit';
	import Button from '../ui/Button.svelte';
</script>

<section class="text-gray-90 relative">
	<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
		<div
			class="lg:w-2/3 md:w-1/2 bg-gray-light rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
		>
			<iframe
				width="100%"
				height="100%"
				class="absolute inset-0"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27654.758399263945!2d76.03232276023947!3d29.955142481020726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911b825113bb703%3A0x45232965fd71d69d!2sPatran%2C%20Punjab%20147105!5e0!3m2!1sen!2sin!4v1706981109110!5m2!1sen!2sin"
			></iframe>
			<!-- style="filter: grayscale(1) contrast(1.2) opacity(0.4);" -->

			<div class="bg-primary-90 relative flex flex-wrap py-6 rounded shadow-md">
				<div class=" px-6">
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
					<p class="mt-1">Patran, Punjab, India</p>
				</div>
				<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
					<a href="mailto:damandhillon521@gmail.com" class="leading-relaxed">
						damandhillon521@gmail.com</a
					>
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
					<a href="tel:9876856295" class="leading-relaxed">+91 98768 56295</a>
				</div>
			</div>
		</div>
		<div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-4 mt-8 md:mt-0">
			<h2 class="text-4xl mb-1 font-medium title-font">Reach Us</h2>
			<!-- <p class="leading-relaxed mb-5 text-gray-600">
				Post-ironic portland shabby chic echo park, banjo fashion axe
			</p> -->
			<div class="relative mb-4">
				<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
				<textarea
					id="message"
					name="message"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
				></textarea>
			</div>
			<Button text="Submit" classes="text-center" />
			<!-- <p class="text-xs text-gray-500 mt-3">
				Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
			</p> -->
		</div>
	</div>
</section>
