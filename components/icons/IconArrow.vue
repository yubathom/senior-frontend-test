<template>
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0.999999L9 9L17 1"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconArrow',
  props: {
    strokeWidth: {
      type: Number,
      default: 1
    }
  }
}
</script>
