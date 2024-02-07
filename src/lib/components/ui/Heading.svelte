<script lang="ts">
	export let title = '';
	// export let $$restProps: { class?: string };
</script>

<h1
	class={`pb-4 text-black text-xl lg:text-5l text-center ${$$restProps.class}`}
>
	{title}
</h1>
<!-- <h2 class="text-black text-xl lg:text-5xl text-center pb-4 relative"> -->
<!-- <h1
	class={`relative heading white-heading z-9 text-black text-xl lg:text-5l text-center ${$$restProps.class}`}
>
	{title}
	<span class="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
</h1> -->

<!-- <style>
	.heading {
		z-index: 999;
	}

	.heading:after {
		content: ' ';
		position: absolute;
		top: 100%;
		left: 50%;
		height: 40px;
		width: 180px;
		border-radius: 4px;
		transform: translateX(-50%);
		background: url(img/heading-line.png);
		background-repeat: no-repeat;
		background-position: center;
	}
	.white-heading:after {
		background: url(https://i.ibb.co/d7tSD1R/heading-line-white.png);
		background-repeat: no-repeat;
		background-position: center;
	}
</style> -->
