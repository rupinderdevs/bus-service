<script>
	import Heading from '../ui/Heading.svelte';
	import SvgIcon from '../ui/SvgIcon.svelte';
</script>

<section class="my-10 py-10 bg-primary-80">
	<section class="px-4 lg:px-14 xl:px-18"></section>
	<Heading title="Facts" />
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center pt-4 px-4 lg:px-14 xl:px-18">
		<div class="p-4 w-full">
			<div class="border-2 border-primary-90 shadow-lg px-4 py-6 rounded-lg">
				<SvgIcon name="Experience" class="w-4 " />
				<h2 class="font-medium text-xl lg:text-4xl text-gray-900">06 +</h2>
				<p class="leading-relaxed text-m lg:text-xl">Years of Experience</p>
			</div>
		</div>
		<div class="p-4  w-full">
			<div class="border-2 border-primary-90 shadow-lg px-4 py-6 rounded-lg">
				<SvgIcon name="Drivers" class="w-4 " />

				<h2 class="font-medium text-xl lg:text-4xl text-gray-900">25+</h2>
				<p class="leading-relaxed text-m lg:text-xl">Drivers</p>
			</div>
		</div>
		<div class="p-4  w-full">
			<div class="border-2 border-primary-90 shadow-lg px-4 py-6 rounded-lg">
				<SvgIcon name="Buses" class="w-4 " />
				<h2 class="font-medium text-xl lg:text-4xl text-gray-900">50 +</h2>
				<p class="leading-relaxed text-m lg:text-xl">Buses</p>
			</div>
		</div>
		<div class="p-4 w-full">
			<div class="border-2 border-primary-90 shadow-lg px-4 py-6 rounded-lg">
				<SvgIcon name="Professionals" class="w-4 " />

				<h2 class="font-medium text-xl lg:text-4xl text-gray-900">20</h2>
				<p class="leading-relaxed text-m lg:text-xl">Professionals</p>
			</div>
		</div>
	</div>
</section>
