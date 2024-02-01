<script lang="ts">
  import { createEffect } from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  /** props */
  export let checked: boolean = false;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();
  const useCheckedEffect = createEffect();

  $: useCheckedEffect(() => {
    dispatch("checked", checked);
  }, [checked]);
</script>

<label class="flex w-fit cursor-pointer items-center gap-2">
  <input
    type="checkbox"
    class="h-4 w-4 cursor-pointer absolute rounded-lg accent-primary bg-grey-700 text-red-500 transition-all checked:scale-y-100 hidden"
    bind:checked
    {disabled}
  />
  {#if checked}
    <svg
      viewBox="0 -1 21 22"
      height="18"
      width="18"
      class="fade-in-image"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
        fill="#00A3EC"
      />
    </svg>
  {:else}
    <svg
      viewBox="0 -1 21 22"
      height="18"
      width="18"
      class="fade-in-image"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM6.536 2H13.472C16.184 2 18 3.904 18 6.736V13.2728C18 16.096 16.184 18 13.472 18H6.536C3.824 18 2 16.096 2 13.2728V6.736C2 3.904 3.824 2 6.536 2Z"
        fill="#00A3EC"
      />
    </svg>
  {/if}
  <slot name="label" />
</label>

<style>
  .fade-in-image {
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    -moz-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    -ms-animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
