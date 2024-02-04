<script lang="ts">
  import { slide } from "svelte/transition";

  export let id: number;
  export let active: boolean;
  export let buttonClass: string = ""; // Default value, can be overridden by the parent component
  export let variant: string = "primary"; // Default value, can be overridden by the parent component
</script>

<li
  transition:slide
  class={`p-2 px-4 text-sm lg:text-base transition-all duration-500 ${
    variant === "primary" ? "rounded-full" : ""
  } ${$$restProps.class} ${
    active
      ? variant === "primary"
        ? "bg-primary text-white"
        : "border-primary border-b-4 text-primary"
      : ""
  }`}
  role="presentation"
>
  <button
    on:click
    class={buttonClass}
    id="{id}-tabhead"
    type="button"
    role="tab"
  >
    <slot />
  </button>
</li>
