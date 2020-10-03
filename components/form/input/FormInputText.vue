<template>
  <div>
    <input
      class="w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300"
      type="text"
      :class="{
        'border-accent-blue': valid,
        'border-accent-red': error.status
      }"
      :name="name"
      :minlength="minlength"
      :placeholder="placeholder"
      v-model="value"
      @focus="focused = true"
    />
    <p v-if="error.status" class="text-xs text-accent-red">
      {{ error.message }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'FormInputText',
  props: {
    name: {
      type: String,
      required: true
    },
    minlength: {
      type: Number,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '',
      focused: false
    }
  },
  computed: {
    valid () {
      return this.value.length >= 1
    },
    error () {
      if (!this.focused || this.valid) {
        return {
          status: false,
          message: 'No error'
        }
      }
      return {
        status: true,
        message: 'This field cannot be empty'
      }
    }
  }
}
</script>
