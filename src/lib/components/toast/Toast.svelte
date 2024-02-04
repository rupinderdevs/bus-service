<script lang="ts">
  /** internal deps */
  import { toast } from "./toastMessage";
  import { createEffect } from "$lib/utils";
  import SvgIcon from "../ui/SvgIcon.svelte";
  /** props */
  /** vars */
  let toastRef: HTMLDivElement | undefined;
  let toastInnerRef: HTMLButtonElement | undefined;

  /** funcs */
  const useEffect = createEffect();

  const handleAnimationEnd = () => {
    // used to ensure both onMount and onDestroy animations work (while ensuring that onDestroy, toast is removed from the DOM and not merely hidden by some CSS classes).
    const {
      open,
      message,
      action,
      position,
      title,
      timeout,
      onClose,
      showCloseButton,
    } = $toast;

    toast.patch({
      message: open ? message : "",
      title: open ? title : "",
      action: open ? action : undefined,
      position: open ? position : "end",
      timeout: open ? timeout : undefined,
      onClose: open ? onClose : undefined,
      showCloseButton: open ? showCloseButton : false,
    });
    if (onClose && !open && timeout !== false) onClose();
  };

  /** react-ibles */
  $: useEffect(() => {
    toastRef?.removeEventListener("animationend", handleAnimationEnd);
    toastRef?.addEventListener("animationend", handleAnimationEnd);
    toastInnerRef?.removeEventListener("animationend", handleAnimationEnd);
    toastInnerRef?.addEventListener("animationend", handleAnimationEnd);
  }, [toastRef?.tagName]);
</script>

{#if $toast.open}
  <div
    bind:this={toastRef}
    class="Toast z-10000 pointer-events-none fixed bottom-0 left-0 flex w-full p-5 justify-{$toast.position} md:p-8 {$toast.open
      ? 'animate-fadeInUpBig'
      : 'animate-fadeInUpBigReverse'}"
  >
    <button
      bind:this={toastInnerRef}
      class="pointer-events-auto flex w-full items-start justify-between text-left {$toast.message &&
      $toast.title
        ? 'max-w-md'
        : 'max-w-2xl'} shadow-3 z-50 cursor-pointer gap-4 rounded-lg bg-white px-5 py-4 text-sm font-semibold shadow-lg transition duration-500 dark:border dark:border-secondary-50 dark:bg-secondary md:w-fit {$toast.open
        ? 'animate-fadeIn'
        : 'animate-fadeOut'}"
      on:click={() => {
        if (!$toast.showCloseButton) {
          toast.patch({ open: false });
        }
      }}
      on:mouseenter={() => {
        toast.patch({ timeout: false });
      }}
      on:mouseleave={() => {
        toast.patch({ timeout: true });
      }}
    >
      <span class="flex">
        <div
          class="grid place-content-center border-l-4 {$toast.type} py-2 px-4"
        >
          <div class="rounded-full border {$toast.type} p-1">
            <span class="grid w-full place-content-center rounded-full p-2">
              <SvgIcon
                name={$toast.type === "danger"
                  ? "close"
                  : $toast.type === "success"
                  ? "check"
                  : "info"}
                class="h-6 w-6 fill-white stroke-white"
              />
            </span>
          </div>
        </div>

        <span
          class="toast-message col-span-3 flex w-fit max-w-full flex-col gap-0.5 self-center"
        >
          {#if $toast.title}
            <span class="text-base font-semibold leading-5">
              {$toast.title}
            </span>
          {/if}
          {#if $toast.message}
            <span class="text-sm font-normal">
              {$toast.message}
            </span>
          {/if}
        </span>
      </span>

      {#if $toast.action}
        <button
          class="hover:(bg-opacity-10 opacity-90) rounded bg-black bg-opacity-0 py-1.5 px-2.5 font-semibold uppercase opacity-60 transition focus:bg-opacity-10"
          on:click={() => {
            $toast.action?.act();
            toast.patch({ open: false });
          }}
        >
          {$toast.action.text}
        </button>
      {/if}
      {#if $toast.showCloseButton}
        <button
          on:click={() => {
            toast.patch({ open: false });
          }}
        >
          <SvgIcon name="close" class="w-3 fill-secondary-40" />
        </button>
      {/if}
    </button>
  </div>
{/if}

<style lang="postcss">
  .Toast {
    animation-timing-function: cubic-bezier(0.86, 0.1, 0.07, 1.25);
    animation-duration: 0.5s;
  }

  .danger {
    @apply border-red-80;
  }
  .danger span {
    @apply bg-red-80;
  }

  .success {
    @apply border-green-80;
  }
  .success span {
    @apply bg-green-80;
  }

  .info {
    @apply border-grad-2;
  }
  .info span {
    @apply bg-grad-2;
  }
</style>
