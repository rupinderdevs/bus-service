<script>

	export let divClass = '';
	
</script>

<div class={divClass}>
	<ul class={`${$$restProps.class} flex justify-center gap-4 flex-wrap pb-4`} role="tablist">
		<slot />
	</ul>
</div>
