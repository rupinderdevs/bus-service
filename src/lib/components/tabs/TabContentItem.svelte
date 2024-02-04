<script lang="ts">
  import { slide } from "svelte/transition";

  export let activeTabValue: number;
  export let id: number;
</script>

{#if activeTabValue === id}
  <div
    transition:slide
    class={$$restProps.class}
    id="{id}-tabitem"
    role="tabpanel"
    aria-labelledby="{id}-tab"
  >
    <slot />
  </div>
{/if}
