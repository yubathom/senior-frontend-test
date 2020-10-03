<template>
  <fieldset class="flex flex-col text-base">
    <label :for="name"
      >{{ label }}
      <span class="text-primary-grey" v-if="required">*</span></label
    >
    <form-input-text
      :minlength="minlength"
      :placeholder="placeholder"
      :name="name"
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
      type: String,
      default: 1
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
