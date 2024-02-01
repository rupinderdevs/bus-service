<script lang="ts">
  /** external deps */
  import { fly } from "svelte/transition";
  import { createEffect } from "$lib/utils/createEffect";
  /** interal deps */
  import Portal from "./Portal.svelte";

  import type { PopperProps } from "./types";

  /** props */
  export let anchor: HTMLElement | null = null;
  export let open = true;
  export let origin: "left" | "right" = "right";
  export let animateFly = true;
  export let reAdjustKey: any = undefined; // basically help to re-adjust the position of the popper if height or position of achor changes
  export let onMouseLeave: PopperProps["onMouseLeave"] = undefined;
  export let style: string = $$restProps.style;

  /** vars */
  let popperHeight: number = 0;
  let willPropup = false; // used when there's not enough space below/under to display the full dropdown
  let anchorClientRect: DOMRect;
  let hasWClass = false;
  let windowWidth = globalThis.innerWidth || 0;
  let windowHeight = globalThis.innerHeight || 0;

  /** funcs */
  const useAnchorEffect = createEffect();

  /** react-ibles */
  $: useAnchorEffect(() => {
    if (open && anchor && windowWidth) {
      anchorClientRect = anchor?.getBoundingClientRect();
      willPropup = windowHeight - anchorClientRect.bottom < popperHeight;
    }
  }, [
    open,
    reAdjustKey,
    anchor?.tagName,
    windowWidth,
    windowHeight,
    popperHeight,
  ]);
  $: hasWClass = /(^|\s)w-/.test($$restProps.class);

  /** props type */
  // type $$Props = PopperProps;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

{#if open}
  <Portal bind:open>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="Popper flex justify-center w-max fixed z-10 h-auto {$$restProps.class ||
        ''}"
      style={`${
        !hasWClass
          ? `min-width: ${anchorClientRect?.width}px; max-width: ${anchorClientRect?.width}px;`
          : ""
      } ${
        origin === "left"
          ? `left: ${anchorClientRect?.left}px;`
          : `right: ${
              windowWidth - (anchorClientRect?.left + anchorClientRect?.width)
            }px;`
      } ${
        willPropup
          ? `bottom: ${windowHeight - anchorClientRect?.top}px;`
          : `top: ${anchorClientRect?.bottom}px;`
      } ${style || ""}`}
      in:fly={!animateFly
        ? undefined
        : { y: willPropup ? 20 : -20, duration: 300 }}
      out:fly={!animateFly
        ? undefined
        : { y: willPropup ? 10 : -10, duration: 300 }}
      bind:offsetHeight={popperHeight}
      on:mouseleave={onMouseLeave}
    >
      <button
          on:click={() => (open = false)}
          class="z-0 absolute h-full w-full left-0"
        />
      <slot />
    </div>
  </Portal>
{/if}
