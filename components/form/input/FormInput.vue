<template>
  <fieldset class="flex flex-col text-base mb-6">
    <label :for="name"
      >{{ label }}
      <span class="text-primary-grey" v-if="required">*</span></label
    >
    <div class="relative">
      <form-input-handler
        :minlength="minlength"
        :placeholder="placeholder"
        :name="name"
        :initialValue="initialValue"
        :type="type"
        @checkInput="handleInput"
      />
      <icon-exclamation-circle
        class="absolute top-0 right-0 mt-3 mr-2 opacity-0 transition duration-300"
        :class="{
          'opacity-100': errorStatus
        }"
      />
      <p v-if="errorStatus" class="text-xs text-accent-red mt-1">
        {{ errorMessage }}
      </p>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'FormInput',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    minlength: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    initialValue: {
      type: String,
      default: ''
    },
    type: {
      validator: val => ['text', 'email', 'phone'].includes(val)
    }
  },
  data () {
    return {
      errorStatus: false
    }
  },
  computed: {
    errorMessage () {
      return {
        text: 'This field cannot be empty',
        email: 'This is not a valid email',
        phone: 'This is not a valid phone number'
      }[this.type]
    }
  },
  methods: {
    handleInput (errorStatus, uid, value) {
      this.errorStatus = errorStatus
      this.$emit('check', errorStatus, uid, { key: this.name, value })
    }
  }
}
</script>
