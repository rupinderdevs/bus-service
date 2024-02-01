<script lang="ts">
  /** external deps */
  import { phone } from "phone";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  /** internal deps */
  import { countryCode, type CountryList } from "$lib/utils/countrycode";
  import SvgIcon from "./SvgIcon.svelte";
  import Popper from "./Popper.svelte";
  import { createEffect } from "$lib/utils/createEffect";

  /** props */
  export let validValue: string | undefined | number | null = null;
  export let value: string = "";
  export let valid: boolean = true;
  export let defaultvalue: string | number = "";

  /** vars */
  let phoneInputValue: string = "";
  let countryCodeList = countryCode;
  let activeIndex: number = 0;
  let selected: CountryList | undefined = countryCodeList[activeIndex];
  let focused: boolean = false;
  let selectDivRef: HTMLDivElement | null = null;
  let showDropdown: boolean = false;
  let phoneObject = phone(value);
  let validChecker = false;
  let searchValue: string = "";

  /** funcs */
  const usePhoneEffect = createEffect();
  const useSearchEffect = createEffect();
  const handleFocus = () => {
    focused = true;
  };
  // const handleBlur: svelte.JSX.FormEventHandler<
  //   HTMLInputElement | HTMLTextAreaElement
  // > = (_e) => {
  //   focused = false;
  // };
  const handleBlur = (_e: any) => {
    focused = false;
  }
  const onkeypress = (event: any) => {
    /^[0-9]$/i.test(event.key) ? "" : event.preventDefault();
  };
  /** lifecycles */
  onMount(() => {
    const value = phone(String(defaultvalue));
    if (value?.isValid) {
      phoneInputValue = value.phoneNumber.replace(value.countryCode, "");
      selected = countryCodeList?.find(
        (val) => val.dial_code === value.countryCode
      );
    }
  });
  /** react-ibles */
  $: selected = countryCodeList[activeIndex === -1 ? 0 : activeIndex];
  $: phoneObject = phone(value);
  $: usePhoneEffect(() => {
    activeIndex = countryCodeList.findIndex(
      (value) => value.dial_code === phoneObject?.countryCode
    );
    phoneInputValue =
      phoneObject?.phoneNumber?.replaceAll(
        phoneObject?.countryCode || "",
        ""
      ) || "";
  }, [phoneObject]);
  $: valid = validChecker
    ? phone(phoneInputValue, { country: selected?.code || "" }).isValid
    : true;
  $: validValue = phone(phoneInputValue, {
    country: selected?.code,
  }).phoneNumber;

  $: useSearchEffect(() => {
    if (searchValue) {
      countryCodeList = countryCode.filter((val) =>
        (val.dial_code + val.name.toLowerCase()).match(
          searchValue.toLowerCase()
        )
      );
    } else {
      countryCodeList = countryCode;
    }
  }, [searchValue]);
</script>

<div>
  <div
    bind:this={selectDivRef}
    class={`flex w-full gap-2 overflow-hidden rounded-lg  px-4 transition-all duration-500 bg-secondary-light ${
      !valid ? "border-red" : ""
    }`}
  >
    <!-- <span
      class="absolute -mt-2 bg-white px-2 text-xs capitalize text-secondary-60 transition-all duration-500 {!phoneInputValue
        ? 'opacity-0'
        : 'opacity-100'}"
    >
      Your Mobile Number
    </span> -->

    <div>
      <button
        on:click={() => (showDropdown = !showDropdown)}
        class="flex h-full w-full items-center justify-center gap-2 divide-y"
      >
        <div class="flex items-center justify-center">
          <span>{selected?.flag || ""}</span>
          <!-- <span>{selected?.dial_code}</span> -->
        </div>

        <SvgIcon
          name="FilledArrow"
          class={`w-3 fill-secondary transition-all duration-500 ${
            showDropdown ? "rotate-180" : ""
          } `}
        />
      </button>
    </div>
    <span class="h-9 border-r my-auto" />
    <div class="flex items-center gap-4 w-full">
      {selected?.dial_code || ""}
      <input
        type="text"
        placeholder="Your Mobile Number"
        on:focus={handleFocus}
        on:keypress={onkeypress}
        on:blur={handleBlur}
        on:change={() => (validChecker = true)}
        bind:value={phoneInputValue}
        class="w-full bg-transparent py-3 outline-0 text-black"
      />
    </div>
  </div>

  {#key phoneInputValue}
    <div
      in:fade={{ duration: 200 }}
      class={`-mt-4 flex text-xs transition-all duration-500 ${
        valid ? "opacity-0" : "opacity-100"
      } relative top-4 w-full items-start pt-0`}
    >
      <span
        class="inline-block w-fit truncate rounded-lg bg-white pr-1 text-red hover:whitespace-normal"
      >
        Please enter an valid phone number.
      </span>
    </div>
  {/key}
</div>

<Popper anchor={selectDivRef} origin="left" bind:open={showDropdown}>
  <div
    class={"my-2 max-h-56 w-full overflow-y-auto rounded-md border-secondary-40 bg-white p-4 shadow-xl"}
  >
    <div class=" bg-secondary-light rounded flex px-4">
      <SvgIcon name="Search" class="w-6" />
      <input
        class="py-2 px-4 outline-0 w-full bg-transparent"
        bind:value={searchValue}
      />
    </div>

    {#key showDropdown}
      {#if countryCode}
        {#each countryCodeList as option, index}
          <button
            on:click={() => {
              showDropdown = false;
              activeIndex = index;
            }}
            class="flex w-full justify-between border-b border-secondary-30 py-3 px-4 text-left text-xs transition-all duration-500 last:border-b-0 hover:bg-secondary-light"
          >
            <span>{option.flag}</span>
            <span> {option.dial_code}</span>
            <span> {option.code}</span>
          </button>
        {:else}
          <div class="text-xs w-full py-2 text-center">No Data</div>
        {/each}
      {/if}
    {/key}
  </div>
</Popper>
