<script lang="ts">
  export let checked = false;
  export let label:string="";
</script>

<div class="flex gap-2 items-center">
<label class="switch">
  <input type="checkbox" bind:checked />
  <span class="slider"></span>
</label>
<span class="text-gray-90">{label}</span>
</div>
<style>
  .switch {
    @apply relative inline-block w-16 h-8;
  }
  .switch input {
    @apply opacity-0 w-0 h-0;
  }
  .slider {
    @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300
           transition duration-500 ease-in-out rounded-full;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 6px;
    bottom: 3px;
    background-color: #2874ba;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #d9edff;
  }

  input:checked + .slider {
    box-shadow: 0 0 1px #d9edff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>
