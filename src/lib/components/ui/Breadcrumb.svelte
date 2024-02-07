<script lang="ts">
	/** external deps */
	/** internal deps */

	import SvgIcon from './SvgIcon.svelte';

	/** props */
	export let crumbs: string[] = [''];
	/** vars */
	/** funcs */
	/** lifecycles */
	/** react-ibles */
	$: niceCrumbs = crumbs.map((crumb) => crumb.replaceAll('-', ' '));
	$: heading = niceCrumbs.at(-1);
</script>

<section
	class="flex justify-center flex-col common-padding h-32 lg:h-60 bg-primary-90 px-6 lg:px-14 xl:px-18"
>
	<h2 class="text-l md:text-4xl font-medium capitalize">{heading}</h2>
	<div class="text-s md:text-m flex">
		<span class="pr-2 font-medium">Home </span>
		<SvgIcon name="Chevron" class="w-5 -rotate-90" />
		{#each niceCrumbs as name, index}
			<span class="{index + 1 === niceCrumbs.length && 'font-medium'} px-4 capitalize">{name}</span>
			{#if index !== niceCrumbs.length - 1}
				<SvgIcon name="Arrow" class="w-5 -rotate-90" />{/if}
		{/each}
	</div>
</section>
