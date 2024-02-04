<script lang="ts">
	// import type { SvelteComponent } from 'svelte';
	import Arrow from '../icon/Arrow.svelte';
	import Check from '../icon/Check.svelte';
	import Phone from '../icon/Phone.svelte';
	import Location from '../icon/Location.svelte';
	import Email from '../icon/Email.svelte';
	import Experience from '../icon/Experience.svelte';
	import Drivers from '../icon/Drivers.svelte';
	import Buses from '../icon/Buses.svelte';
	import Professionals from '../icon/Professionals.svelte';
	import Chevron from '../icon/Chevron.svelte';

	


	export let name: 'Check' | 'Arrow' | 'Phone' | 'Location' | 'Email' | 'Experience' | 'Drivers' | 'Buses' | 'Professionals' | 'Chevron';

	const svgIconList: any = {
		Check,
		Arrow,
		Phone,
		Location,
		Email,
		Experience,
		Drivers,
		Professionals,
		Buses,
		Chevron

	};
</script>

<svelte:component this={svgIconList[name]} class={$$restProps.class} />
