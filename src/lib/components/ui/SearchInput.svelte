<script lang="ts">
  /** external deps */
  /** internal deps */
  import SvgIcon from "./SvgIcon.svelte";
  import TextInput from "./TextInput.svelte";
  /** props */
  export let placeholder: string = "";
  export let value: string = "";
  /** vars */
  /** funcs */
  /** lifecycles */
  /** react-ibles */
</script>

<TextInput
  {placeholder}
  isRounded={true}
  showLabel={false}
  bind:value
  classes={`bg-secondary-light border-secondary-light ${$$restProps.class}`}
>
  <div slot="rightContent"><SvgIcon name="Search" class="w-5 fill-gray-90" /></div>
</TextInput>
