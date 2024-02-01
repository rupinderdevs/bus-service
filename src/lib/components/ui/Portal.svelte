<script lang="ts">
  /** external deps */
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";

  /** internal deps */

  import type { PortalProps } from "./types";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { modalCount } from "$lib/stores/modal";

  /** props */
  export let target: PortalProps["target"] | undefined =
    globalThis.document?.body;
  export let open: PortalProps["open"] = true;
  export let backdropProps: PortalProps["backdropProps"] = undefined;
  export let transitionConfig: PortalProps["transitionConfig"] | undefined =
    undefined;
  export let dismissible: PortalProps["dismissible"] = true;
  export let onClose: PortalProps["onClose"] = undefined;

  /** vars */
  let portee: HTMLElement | null;
  let targetHasScroll = false;
  let id = `p${String(Math.random()).replace(".", "")}`;

  /** funcs */
  const navigationEvent = () => (open = false);

  /** lifecycles */
  onMount(() => {
    portee = document.querySelector(`#${id}`);

    if (target && portee) {
      targetHasScroll = target.scrollHeight == target.offsetHeight;
      target.appendChild(portee);
      if (targetHasScroll) {
        target.classList.add("overflow-hidden", "md:mr-2");
      }
    }
  });

  onDestroy(() => {
    if (target && !$modalCount) {
      target.classList.remove("overflow-hidden", "md:mr-2"); // mr-2 because of the scroll bar (width) when overflow is set to 'hidden'
    }

    // This block is not really useful/needful for Portal, as, on destroy, the ref will no longer exist/be in the DOM anyways. Portal would still work (and behave well) without it.
    setTimeout(() => {
      if (portee?.parentNode) {
        portee.parentNode?.removeChild(portee);
      }
    });
  });

  beforeNavigate(navigationEvent);
  afterNavigate(navigationEvent);

  /** react-ibles */

  /** props type */
  type $$Props = PortalProps;
</script>

{#if open}
  <div
    role="presentation"
    {...$$restProps}
    class="Portal fixed top-0 left-0 h-screen w-screen z-50 !m-0 !mr-3 {$$restProps.class ||
      ''}"
    {id}
    transition:fade={{
      duration: 250,
      ...(transitionConfig || {}),
    }}
  >
    <button
      on:click={() => {
        if (backdropProps?.onTap) backdropProps.onTap();

        if (onClose) {
          setTimeout(() => {
            if (onClose) onClose();
          }, 500); // using a setTimeout here because of a bug that happens with SvelteKit not unmounting the Portal when a route navigation happens because the Modal animation has to first finish before the parent Portal component is unmounted (which unfortunately does not happen) and this makes SvelteKit 'loose balance'...Haq!
          open = !dismissible;
        } else open = !dismissible;
      }}
      class="Backdrop absolute h-full w-full left-0 {backdropProps?.class ||
        ''} {dismissible ? 'cursor-pointer' : ''}"
      on:keypress={undefined}
    />
    <slot />
  </div>
{/if}