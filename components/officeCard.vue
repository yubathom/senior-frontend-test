<template>
  <div
    class="office-card flex-col rounded-b-lg mt-6 transition-opacity rounded-t-lg bg-white"
    :class="{
      'office-card--active': active,
      'opacity-0': deleted
    }"
  >
    <article
      class="flex items-center justify-between py-12 px-6 rounded-lg shadow-xl text-white cursor-pointer"
      :class="`bg-${color}`"
      @click="active = !active"
    >
      <div>
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <p class="text-base">{{ address }}</p>
      </div>
      <icon-arrow
        class="transform duration-300"
        :class="{
          '-rotate-180': active
        }"
      />
    </article>
    <article
      v-if="active"
      class="pt-6 px-6 pb-3 leading-9 shadow-lg rounded-lg opacity-0 transition-opacity duration-300 ease-in-out"
      :class="{ 'opacity-100': activeDelayed }"
    >
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <section>
        <p>{{ role }}</p>
        <p>
          <a :href="`mailto:${email}?subject=Offices%20-%20${title}`">{{
            email
          }}</a>
        </p>
        <p>{{ phone }}</p>
      </section>
      <section
        class="border-t w-full flex justify-between mt-2 pt-2 pb-1 text-xs text-primary-grey"
      >
        <button class="flex items-center" @click.prevent="edit(id)">
          <icon-pencil /><span class="ml-2">EDIT</span>
        </button>
        <button class="flex items-center" @click.prevent="remove(id)">
          <icon-trash /><span class="ml-2 text-accent-red">DELETE</span>
        </button>
      </section>
    </article>
  </div>
</template>
<script>
export default {
  name: 'OfficeCard',
  props: {
    id: {
      type: Number,
      required: true
    },
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
    color: {
      type: String,
      default: 'primary-grey'
    },
    deleted: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      active: false,
      activeDelayed: false
    }
  },
  watch: {
    active (state) {
      setTimeout(() => (this.activeDelayed = state), 100)
    }
  },
  methods: {
    remove (id) {
      this.$emit('delete', id)
    },
    edit (id) {
      this.$emit('edit', id)
    }
  }
}
</script>
<style lang="scss">
.office-card {
  height: 156px;
  transition: all ease-in-out 300ms;
  &--active {
    height: 393px;
  }
}
</style>
