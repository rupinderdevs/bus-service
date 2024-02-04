<script>
  // @ts-nocheck

  export const open = "";
  import { slide } from "svelte/transition";
  import SvgIcon from "../ui/SvgIcon.svelte";
  export let accordionClass = "";
  export let key = "";
  export let activeKey = "";
  export let handleOpenAccordion = () => {};
</script>

<div class={accordionClass}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="flex justify-between p-1 cursor-pointer text-lg"
    on:click={handleOpenAccordion.bind(this, key)}
  >
    <div class="">
      <slot name="head" />
    </div>

    <button>
      <SvgIcon
        name="Arrow"
        class="stroke-black h-3 w-5 stroke-w-0.5 {key === activeKey
          ? '-rotate-90'
          : 'rotate-90'} transition-all	"
      />
    </button>
  </div>

  {#if key === activeKey}
    <div class="details text-md font-light p-4" transition:slide>
      <slot name="details" />
    </div>
  {/if}
</div>
