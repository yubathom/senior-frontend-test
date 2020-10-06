<template>
  <ul>
    <li
      class="flex justify-center items-center shadow-lg rounded-lg h-32 w-full mt-2 mb-6 cursor-pointer transition-colors duration-300"
      :class="activeBgColor"
      @click="open = !open"
    >
      <p class="mr-2 text-white font-bold">Select Color</p>
      <icon-arrow
        class="transform scale-50"
        :stroke-width="3"
        :class="{
          'rotate-180': !open,
          'rotate-0': open
        }"
      />
    </li>
    <li>
      <transition name="fade">
        <ul v-if="open">
          <li class="color" v-for="(color, index) in colors" :key="index">
            <button
              class="flex justify-center items-center h-32 w-full my-2 rounded-lg"
              :class="`bg-${color}`"
              @click.prevent="change(index)"
            >
              <icon-check
                v-if="index === selectedIndex"
                class="transform scale-125"
              />
            </button>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>
<script>
import IconArrow from '@/components/icons/IconArrow'
import IconCheck from '@/components/icons/IconCheck'

export default {
  name: 'FormColorSelector',
  components: {
    IconArrow,
    IconCheck
  },
  props: {
    mainColor: {
      type: String,
      default: 'primary-grey'
    },
    colors: {
      type: Array,
      default: () => [
        'accent-yellow',
        'accent-red',
        'accent-blue',
        'primary-grey',
        'primary-darkblue'
      ]
    }
  },
  data () {
    return {
      open: false,
      selectedIndex: 0
    }
  },
  computed: {
    activeBgColor () {
      return this.open
        ? 'bg-primary-grey'
        : `bg-${this.colors[this.selectedIndex]}`
    }
  },
  methods: {
    change (index) {
      this.selectedIndex = index
      this.open = false
      this.$emit('setColor', 'color', this.colors[index])
    }
  },
  created () {
    this.selectedIndex = this.colors.findIndex(
      color => color === this.mainColor
    )
  }
}
</script>
<style lang="scss">
.colors-move {
  // transition: transform 1s;
  transform: translateX(70px);
}

.colors-enter-active, .colors-leave-active {
  position: absolute;
  transition: all 300ms;
  z-index: 100;
  opacity: 1;
}

.colors-enter, .colors-leave-to {
  transform: translateY(70px);
  opacity: 0;
}

.color {

}

</style>