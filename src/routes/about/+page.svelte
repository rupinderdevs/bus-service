<script>
	import Services from '$lib/components/section/Services.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import bus1 from '../../lib/images/buses/dhillon-bus15.jpg';
	import SvgIcon from '$lib/components/ui/SvgIcon.svelte';
</script>

<Breadcrumb crumbs={['About Us']} />

<section class="flex gap-4 flex-col md:flex-row px-4 py-6 lg:px-14 xl:px-18">
	<div
		class="lg:flex-grow w-full pr-4 gap-6 flex flex-col md:items-start items-center"
	>
		<h2 class="text-xl lg:text-4xl">Travel with Dhillon Bus</h2>
		<p class="leading-7">
			Dhillon Bus has been providing reliable transportation services, catering to the needs of
			people in major cities and small towns. With a commitment to safety, comfort, and
			affordability, they have established themselves as a trusted choice for travelers.
		</p>
		<ul class="list-none space-y-2">
			<li class=""><strong>Founded by:</strong> ....</li>
			<li class=""><strong>Address:</strong> Patran, Punjab, India</li>
			<li class="">
				<strong>Deals In:</strong> Semi-deluxe, Deluxe and AC/Non AC Buses rental services for tours,
				marriages, religious functions, parties etc.
			</li>
		</ul>
		<h2 class="text-2xl">Features</h2>

		<ul class="list-none space-y-2">
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Best-in-class service since 2017.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Specialized tourist buses for all India tours.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Continuous addition of new buses to the fleet.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Trusted by thousands of travelers.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Years of commitment ensuring safety and comfort.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Affordable, reliable, and safe journeys.</span>
			</li>
			<li class="flex gap-2">
				<SvgIcon name="Check" class="fill-secondary stroke-secondary w-4 h-4" />
				<span>Serving major cities and small towns.</span>
			</li>
		</ul>
	</div>
	<div class="">
		<img class="object-cover object-center rounded" alt="hero" src={bus1} />
	</div>
</section>
<section>
	<Services />
</section>
