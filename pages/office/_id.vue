<template>
  <section class="bg-white rounded-xl shadow-xl rounded-lg p-6">
    <div class="flex justify-between">
      <h3 class="font-bold text-primary-darkblue">Edit location</h3>
      <nuxt-link tag="button" :to="{ path: '/' }"><icon-close /></nuxt-link>
    </div>
    <form class="mt-8">
      <form-color-selector
        :main-color="fields.color"
        @setColor="setField"
      />
      <form-input
        label="Title"
        name="title"
        placeholder="Your title"
        type="text"
        :initialValue="fields.title"
        :required="true"
        :minlength="1"
       @check="handleInput"
      />
      <form-input
        label="Enter the address"
        name="address"
        placeholder="0000 W. Some St."
        type="text"
        :initialValue="fields.address"
        :required="true"
        :minlength="3"
        @check="handleInput"
      />
      <form-button
        class="mt-4"
        title="Save"
        :disabled="disabled"
        @click="handleSave"
      />
    </form>
  </section>
</template>
<script>
export default {
  name: 'IdEdit',
  data () {
    return {
      fields: {},
      changed: false,
      errors: []
    }
  },
  computed: {
    disabled () {
      return this.errors.length > 0 || !this.changed
    }
  },
  created () {
    this.fields = { ...this.$route.query }
  },
  methods: {
    setField (key, value) {
      this.fields[key] === value
        ? this.changed = false
        : this.changed = true

      this.fields[key] = value
    },
    handleSave (e) {
      console.log(e)
    },
    handleInput (errorStatus, uid, { key, value }) {
      this.changed = true
      if (errorStatus && !this.errors.includes(uid)) {
        this.errors.push(uid)
      }
      else if (!errorStatus) {
        this.errors = this.errors.filter(item => item !== uid)
        this.fields[key] = value
      }
    }
  },
  watch: {
    fields: {
      deep: true,
      handler (query) {
        if (!this.changed) return
        this.$router.replace({ query })
      }
    }
  }
}
</script>
