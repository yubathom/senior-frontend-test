<template>
  <div class="z-10 top-0 fixed w-full h-full border-t-2 border-accent-blue uppercase cursor-pointer" @click.prevent="resetTooltip">
    <button class="fixed mt-2 p-4 right-0"><icon-close /></button>
    <div class="flex bg-white p-6 justify-center">
      <p class="flex text-xs text-primary-darkblue items-center">
        <icon-check />{{ message }}
      </p>
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
  data () {
    return {
      fade: false
    }
  },
  methods: {
    ...mapActions('ui', ['resetTooltip']),
  }
}
</script>
