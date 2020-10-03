<template>
  <div class="z-10 top-0 fixed w-full border-t-2 border-accent-blue">
    <div class="flex bg-white p-6 justify-center">
      <p class="flex text-xs text-primary-darkblue items-center">
        <icon-check />{{ message }}
      </p>
      <button @click.prevent="resetTooltip"><icon-close /></button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'UiTooltip',
  props: {
    message: {
      type: String,
      retuired: true
    }
  },
  methods: {
    ...mapActions('ui', ['resetTooltip'])
  }
}
</script>
