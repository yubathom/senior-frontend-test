<template>
  <div class="accent-background py-32 text-primary-darkblue">
    <transition name="fade">
      <ui-tooltip v-if="tooltipDisplay" />
    </transition>
    <app-header />
    <nuxt class="max-w-xs mx-auto" />
    <app-footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Default',
  scrollToTop: true,
  computed: {
    ...mapState('ui', ['tooltipDisplay'])
  }
}
</script>
