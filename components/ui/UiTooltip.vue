<template>
  <div class="z-10 top-0 fixed w-full border-t-2 border-accent-blue">
    <div class="flex bg-white p-6 justify-center">
      <p class="flex text-xs text-primary-darkblue items-center"><icon-check />{{ message }}</p>
      <!-- <button class=""><icon-close /></button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'UiTooltip',
  props: {
    message: {
      type: String,
      default: 'THE LOCATION HAS BEEN UPDATED'
    }
  }
}
</script>