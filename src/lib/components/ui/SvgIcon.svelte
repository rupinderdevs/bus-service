<script lang="ts">
	// import type { SvelteComponent } from 'svelte';
	import Arrow from '../icon/Arrow.svelte';
	import Check from '../icon/Check.svelte';

	export let name: 'Check' | 'Arrow';

	const svgIconList: any = {
		Check,
		Arrow
	};
</script>

<svelte:component this={svgIconList[name]} class={$$restProps.class} />
