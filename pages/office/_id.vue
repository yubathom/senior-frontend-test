<template>
  <section class="bg-white rounded-xl shadow-xl rounded-lg p-6">
    <div class="flex justify-between">
      <h3 class="font-bold text-primary-darkblue">Edit location</h3><nuxt-link tag="button" :to="{ path: '/' }"><icon-close /></nuxt-link>
    </div>
    <form-color-selector :main-color="fields.color" @setColor="setField" />
    <form>
    </form>
  </section>
</template>
<script>
export default {
  name: 'IdEdit',
  data () {
    return {
      fields: {},
      changed: false
    }
  },
  created ( ) {
    this.fields = { ...this.$route.query }
  },
  methods: {
    setField (key, value) {
      this.changed = true
      this.fields[key] = value
    }
  },
  watch: {
    fields: {
      deep: true,
      handler(query) {
        if (!this.changed) return
        this.$router.replace({ query })
      }
    }
  }
}
</script>
