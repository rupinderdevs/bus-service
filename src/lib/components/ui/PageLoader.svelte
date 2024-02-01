<script lang="ts">
  /** external deps */
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  /** internal deps */
  import { navigationState } from "$lib/stores";

  /** funcs */
  const progress = tweened(0, {
    duration: 3500,
    easing: cubicOut,
  });

  const unsubscribe = navigationState.subscribe(
    (state: "loading" | "loaded" | null) => {
      if (state === "loaded") progress.set(1, { duration: 300 });
    }
  );

  /** lifecycles */
  onMount(() => {
    progress.set(0.9);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div
  class="fixed top-0 left-0 right-0 z-50"
  out:fly|local={{ delay: 500, duration: 1000, y: -8, opacity: 0 }}
>
  <div
    class={"progress-sliver bg-primary dark:bg-grad-1 h-full"}
    style={`height: 0.125em; transform: scaleX(${$progress}); transform-origin: center left;`}
  />
</div>
