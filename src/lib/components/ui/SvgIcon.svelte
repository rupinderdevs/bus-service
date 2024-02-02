<script lang="ts">
	// import type { SvelteComponent } from 'svelte';
	import Arrow from '../icon/Arrow.svelte';
	import Check from '../icon/Check.svelte';
	import Phone from '../icon/Phone.svelte';
	import Location from '../icon/Location.svelte';

	export let name: 'Check' | 'Arrow' | 'Phone' | 'Location';

	const svgIconList: any = {
		Check,
		Arrow,
		Phone,
		Location
	};
</script>

<svelte:component this={svgIconList[name]} class={$$restProps.class} />
