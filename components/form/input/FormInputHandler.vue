<template>
  <input
    class="w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300"
    :type="type"
    :class="{
      'border-accent-blue': valid && focused,
      'border-accent-red': error
    }"
    :name="name"
    :minlength="minlength"
    :placeholder="placeholder"
    v-model="content"
    @focus.once="pristine = false"
    @focus="focused = true"
    @blur="handleInput(error, _uid, content, true)"
    @keyup.prevent="handleInput(error, _uid, content, false)"
  />
</template>
<script>
export default {
  name: 'FormInputHandler',
  props: {
    name: {
      type: String,
      required: true
    },
    minlength: {
      type: Number,
      required: true
    },
    type: {
      type: String,
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
      content: '',
      focused: false,
      pristine: true
    }
  },
  computed: {
    valid () {
      return {
        text: this.content.length >= this.minlength,
        email: (() => {
          const emailPattern = /\S+@\S+\.\S+/
          return emailPattern.test(this.content)
        })(),
        phone: (() => {
          const phonePattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
          return phonePattern.test(this.content)
        })()
      }[this.type]
    },
    error () {
      return this.pristine || this.valid ? false : true
    }
  },
  created () {
    this.content = this.initialValue
  },
  methods: {
    handleInput (errorStatus, uid, content, blur) {
      if (blur) this.focused = false
      this.$emit('checkInput', errorStatus, uid, content)
    }
  }
}
</script>
