<script lang="ts">
	/** external deps */
	/** internal deps */
	// import SvgIcon from "./SvgIcon.svelte";
	// import type { SVGIconProps } from "./types";
	/** props */
	export let text: string;
	export let variant: 'primary' | 'secondary' | 'tertiary' | 'plain' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	/**
	 * @deprecated classes use class instead
	 */

	/** vars */
	/** funcs */
	/** lifecycles */
	/** react-ibles */
</script>

<button on:click class="{variant} {size} {$$restProps.classes}" {...$$restProps}>{text} </button>

<style>
	button {
		@apply flex h-fit items-center gap-3 rounded-md border border-transparent px-4 py-2 opacity-90 transition-all duration-500 hover:opacity-100 disabled:opacity-60;
	}
	.primary {
		@apply bg-primary text-white opacity-90 hover:opacity-60;
	}
	.secondary {
		@apply bg-gray-90 hover:opacity-60;
	}
	.tertiary {
		@apply text-white bg-black hover:opacity-60;
	}
	.lg {
		@apply px-8 py-4;
	}
</style>
