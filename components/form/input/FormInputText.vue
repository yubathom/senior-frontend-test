<template>
  <div class="relative">
    <input
      class="w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300"
      type="text"
      :class="{
        'border-accent-blue': valid && focused,
        'border-accent-red': error.status
      }"
      :name="name"
      :minlength="minlength"
      :placeholder="placeholder"
      v-model="value"
      @focus.once="pristine = false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.prevent="handleInput(error.status, _uid, value)"
    />
    <icon-exclamation-circle
      class="absolute top-0 right-0 mt-3 mr-2 opacity-0 transition duration-300"
      :class="{
        'opacity-100': error.status
      }"
    />
    <p v-if="error.status" class="text-xs text-accent-red mt-1">
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
    },
    initialValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '',
      focused: false,
      pristine: true
    }
  },
  computed: {
    valid () {
      return this.value.length >= this.minlength
    },
    error () {
      if (this.pristine || this.valid) {
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
  },
  created () {
    this.value = this.initialValue
  },
  methods: {
    handleInput(errorStatus, uid, value){
      this.$emit('check', errorStatus, uid, value)
    }
  }
}
</script>
