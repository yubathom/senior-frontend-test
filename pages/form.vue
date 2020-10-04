<template>
  <section class="bg-white rounded-xl shadow-xl rounded-lg p-6">
    <div class="flex justify-between">
      <h3 class="font-bold text-primary-darkblue">{{ pageTitle }}</h3>
      <nuxt-link tag="button" :to="{ path: '/' }"><icon-close /></nuxt-link>
    </div>
    <form class="mt-8">
      <form-color-selector :main-color="fields.color" @setColor="setField" />
      <form-input
        label="Title"
        name="title"
        placeholder="Headquarters"
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
        :minlength="2"
        @check="handleInput"
      />
      <section class="mt-10">
        <h4 class="mb-6 pb-3 uppercase text-sm text-accent-blue border-b">
          Contact information
        </h4>
        <form-input
          label="Full name"
          name="name"
          placeholder="John Smith"
          type="text"
          :initialValue="fields.name"
          :required="true"
          :minlength="2"
          @check="handleInput"
        />
        <form-input
          label="Job Position"
          name="role"
          placeholder="Software Engineer"
          type="text"
          :initialValue="fields.role"
          :required="true"
          :minlength="2"
          @check="handleInput"
        />
        <form-input
          label="Email address"
          name="email"
          placeholder="name@example.com"
          type="email"
          :initialValue="fields.email"
          :required="true"
          :minlength="3"
          @check="handleInput"
        />
        <form-input
          label="Phone"
          name="phone"
          placeholder="(xxx) xxx-xxxx"
          type="phone"
          :initialValue="fields.phone"
          :required="true"
          :minlength="7"
          @check="handleInput"
        />
      </section>
      <form-button
        class="mt-4"
        title="Save"
        :disabled="disabled"
        @click.prevent="handleSave"
      />
    </form>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Form',
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
    },
    pageTitle () {
      return this.$route.query.create ? 'New Location' : 'Edit Location'
    }
  },
  created () {
    this.fields = { ...this.$route.query }
  },
  methods: {
    ...mapActions('ui', ['setTooltip']),
    setField (key, value) {
      this.fields[key] === value
        ? (this.changed = false)
        : (this.changed = true)

      this.fields[key] = value
    },
    handleInput (errorStatus, uid, { key, value }) {
      this.changed = true
      if (errorStatus && !this.errors.includes(uid)) {
        this.errors.push(uid)
      } else if (!errorStatus) {
        this.errors = this.errors.filter(item => item !== uid)
        this.fields[key] = value
      }
    },
    async handleSave () {
      // todo: rewrite this for an api req
      const { $router, setTooltip, $route } = this

      await setTimeout(() => {
        $router.push({ path: '/' })
        const message = $route.query.create
          ? 'The location has been created'
          : 'The location has been updated'
        setTooltip(message)
      }, 500)
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
  },
  transition: {
    name: 'grow',
    scrollToTop: true
  }
}
</script>
