<script lang="ts">
	export let category: string;
	export let title: string;
	export let description: string;
	export let imageSrc: string;
</script>

<div
	class="h-full border-2 border-primary-90 shadow-xl border-opacity-60 rounded-lg overflow-hidden group"
>
	<div class="relative overflow-hidden bg-cover bg-no-repeat">
		<img
			class="xl:max-h-72 lg:h-64 md:h-36 w-full object-cover object-center group-hover:scale-105 transition-all duration-500"
			src={imageSrc}
			alt="blog"
		/>
		<div
			class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"
		></div>
	</div>
	<div class="p-6">
		<h2 class="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
			{category}
		</h2>
		<h1 class="text-lg lg:text-xl font-medium text-black mb-3">{title}</h1>
		<p class="text-xs lg:text-s leading-relaxed my-1">{description}</p>
		<hr class="border-b border-secondary-90 border-dotted mt-6" />
	</div>
</div>
