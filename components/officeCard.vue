<template>
  <div class="max-w-sm mx-auto flex-col p-6 bg-white rounded-lg shadow-xl bg-accent-blue text-white py-16">
    <h3 class="text-3xl font-bold">{{ title }}</h3>
    <h4 class="text">{{ address }}</h4>
  </div>
</template>
<script>
export default {
  name: 'OfficeCard',
  props: {
    title: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>