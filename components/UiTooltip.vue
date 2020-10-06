<template>
  <div
    class="z-10 top-0 fixed w-full border-t-2 border-accent-blue uppercase cursor-pointer"
    @click.prevent="resetTooltip"
  >
    <button class="fixed mt-2 p-4 right-0"><icon-close /></button>
    <div class="flex bg-white p-6 justify-center">
      <p class="flex text-xs text-primary-darkblue items-center">
        <icon-check />{{ tooltipMessage }}
      </p>
    </div>
  </div>
</template>
<script>
import IconClose from '@/components/icons/IconClose'
import IconCheck from '@/components/icons/IconCheck'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'UiTooltip',
  components: {
    // needed to declare to do proper unit testing
    IconClose,
    IconCheck
  },
  computed: {
    ...mapState('ui', ['tooltipMessage'])
  },
  methods: {
    ...mapActions('ui', ['resetTooltip'])
  }
}
</script>
