<script lang="ts">
	import { testimonials } from '$lib/data';
	import Carousel from '../carousel/Carousel.svelte';
</script>

<section id="testimonials" class="py-20 px-4 lg:px-14 xl:px-18">
	<div>
		<Carousel autoplay={true}>
			{#each testimonials as { src, description, name }}
				<div class="flex w-full">
					<div class="testimonial text-center mx-6">
						<div
							class="pic p-3 inline-block w-28 h-28 border-4 border-secondary rounded-full overflow-hidden shadow-lg mb-4"
						>
							<img {src} alt="Client" class="w-full h-full object-cover" />
						</div>
						<p
							class="description min-h-80 p-4 text-s bg-primary-80 rounded-2xl shadow-lg border-b-4 border-secondary mb-6"
						>
							{description}
						</p>
						<h3 class="text-xl font-semibold mb-2">
							{name}
						</h3>
						<span class="block text-gray-light">Passenger</span>
					</div>
				</div>
			{/each}
		</Carousel>
	</div>
</section>

<style>
	.testimonial .pic {
		box-shadow:
			0 7px rgba(0, 0, 0, 0.1),
			0 5px #d9a21b;
	}
	.testimonial .pic img {
		width: 100%;
		height: auto;
	}
	.testimonial .description {
		line-height: 30px;
		box-shadow:
			0 7px rgba(0, 0, 0, 0.1),
			0 5px #d9a21b;
	}
</style>
