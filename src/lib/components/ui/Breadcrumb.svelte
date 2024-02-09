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
	$: brdCrumbs = crumbs.map((crumb) => crumb.replaceAll('-', ' '));
	$: heading = brdCrumbs.at(-1);
</script>

<section
	class="flex justify-center flex-col common-padding h-32 lg:h-60 bg-primary-90 px-6 lg:px-14 xl:px-18"
>
	<h2 class="text-l md:text-4xl font-medium capitalize">{heading}</h2>
	<div class="text-s md:text-m flex">
		<span class="pr-2 font-medium">Home </span>
		<SvgIcon name="Chevron" class="w-3 -rotate-90" />
		{#each brdCrumbs as name, index}
			<span class="{index + 1 === brdCrumbs.length && 'font-medium'} px-4 capitalize">{name}</span>
			{#if index !== brdCrumbs.length - 1}
				<SvgIcon name="Arrow" class="w-3 -rotate-90" />{/if}
		{/each}
	</div>
</section>
