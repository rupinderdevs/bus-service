<script>
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import bus1 from '../../lib/images/buses/dhillon-bus15.jpg';
</script>

<Breadcrumb crumbs={['About Us']} />

<section class="flex gap-4 flex-col md:flex-row px-4 py-6 lg:px-14 xl:px-18">
	<div
		class="lg:flex-grow md:w-11/12 pr-4 gap-10 flex flex-col md:items-start md:text-left items-center text-center"
	>
		<h2 class="text-4xl pb-6">Dhillon Bus</h2>
		<p>
			Established in 2017 by Mr. XYZ with an aim to provide safe and affordable journey, today
			Dhillon Bus is the leading bus rental service provider in Punjab. We offer flexible and
			reliable solution to travelers and always aim for total customer satisfaction. Our friendly
			and personalized services is the reason that we are considered the most reliable tourist bus
			operator in Punjab. We are proud that our reputation for traditional values has spread from
			family to family and business to business all over the area. Our reputation is built over a
			long period of commitment. We continue to expand our offerings of different product lines to
			cater to the ever demanding customer requirements. Despite so many changes and expansions in
			our business, the top most priority has always been – Customer Satisfaction and we have been
			able to deliver it due to our unmatched professional reputation and goodwill in the business.
		</p>
		<ul class="list-style-none gap-2 flex flex-col">
			<li>Founded by: XYC</li>
			<li>Address: Patran</li>
      <li>Deals In Semi-deluxe, Deluxe and AC/Non AC Buses rental services for tours, marriages, religious functions, parties etc.</li>
		</ul>
	</div>
	<div class="">
		<img class="object-cover object-center rounded" alt="hero" src={bus1} />
	</div>
</section>
