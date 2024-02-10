<script>
	import bus1 from '$lib/images/buses/dhillon-bus1.webp';
	import bus2 from '$lib/images/buses/dhillon-bus2.webp';
	import bus3 from '$lib/images/buses/dhillon-bus3.webp';
	import bus4 from '$lib/images/buses/dhillon-bus4.webp';
	import bus5 from '$lib/images/buses/dhillon-bus5.webp';
	import bus6 from '$lib/images/buses/dhillon-bus6.webp';
	import bus7 from '$lib/images/buses/dhillon-bus7.webp';
	import bus8 from '$lib/images/buses/dhillon-bus8.webp';
	import bus11 from '$lib/images/buses/dhillon-bus11.webp';
	import bus12 from '$lib/images/buses/dhillon-bus12.webp';
	import bus13 from '$lib/images/buses/dhillon-bus13.webp';
	import bus14 from '$lib/images/buses/dhillon-bus14.webp';
	import bus15 from '$lib/images/buses/dhillon-bus15.webp';
	import bus16 from '$lib/images/buses/dhillon-bus16.webp';
	import bus17 from '$lib/images/buses/dhillon-bus17.webp';
	import bus18 from '$lib/images/buses/dhillon-bus18.webp';
	import bus19 from '$lib/images/buses/dhillon-bus19.webp';
	import bus20 from '$lib/images/buses/dhillon-bus20.webp';

	let images1 = [{ src: bus1 }, { src: bus2 }, { src: bus3 }, { src: bus4 }, { src: bus5 }];
	let images2 = [{ src: bus6 }, { src: bus7 }, { src: bus8 }, { src: bus11 }, { src: bus12 }];
	let images3 = [{ src: bus13 }, { src: bus14 }, { src: bus15 }, { src: bus16 }, { src: bus17 }];
	let images4 = [{ src: bus18 }, { src: bus19 }, { src: bus20 }];
</script>

<section class="px-4 lg:px-14 xl:px-18">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<div class="flex flex-col">
			{#each images1 as { src }}
				<img
					class="p-1 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105 rounded-xl"
					{src}
					alt="gallery"
				/>
			{/each}
		</div>
		<div class="flex flex-col">
			{#each images2 as { src }}
				<img
					class="p-1 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105 rounded-xl"
					{src}
					alt="gallery"
				/>
			{/each}
		</div>
		<div class="flex flex-col">
			{#each images3 as { src }}
				<img
					class="p-1 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105 rounded-xl"
					{src}
					alt="gallery"
				/>
			{/each}
		</div>
		<div class="flex flex-col">
			{#each images4 as { src }}
				<img
					class="p-1 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105 rounded-xl"
					{src}
					alt="gallery"
				/>
			{/each}
		</div>
	</div>
</section>
