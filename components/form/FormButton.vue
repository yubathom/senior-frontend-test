<template>
  <button
    class="bg-accent-blue hover:bg-primary-darkblue disabled:bg-primary-grey disabled:opacity-50 text-white font-base py-2 px-4 rounded transition-all duration-200"
    :class="{
      'cursor-not-allowed': disabled
    }"
    @click.prevent="click"
    :disabled="disabled"
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  name: 'FormButton',
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>
