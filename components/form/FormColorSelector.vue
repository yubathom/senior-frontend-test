<template>
  <ul>
    <li
      class="flex justify-center items-center shadow-lg rounded-lg h-32 w-full mt-2 mb-4 cursor-pointer transition-colors duration-300"
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
    <transition-group name="grow">
      <template v-if="open">
        <li v-for="(color, index) in colors" :key="index">
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
      </template>
    </transition-group>
  </ul>
</template>
<script>
export default {
  name: 'FormColorSelector',
  props: {
    mainColor: {
      type: String,
      required: true
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
