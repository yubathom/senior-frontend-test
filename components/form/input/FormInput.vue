<template>
  <fieldset class="flex flex-col text-base mb-6">
    <label :for="name"
      >{{ label }}
      <span class="text-primary-grey" v-if="required">*</span></label
    >
    <form-input-text
      :minlength="minlength"
      :placeholder="placeholder"
      :name="name"
      :initialValue="initialValue"
      @check="handleInput"
    />
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
      validator: function (val) {
        return ['text', 'email'].includes(val)
      }
    }
  },
  methods: {
    handleInput (errorStatus, uid, value) {
      this.$emit('check', errorStatus, uid, { key: this.name, value })
    }
  }
}
</script>
