<template>
  <div class="max-w-xs mx-auto">
    <nuxt-link tag="div" :to="{ path: '/office/create' }" class="flex items-center justify-between p-4 bg-accent-red text-base text-white rounded-lg shadow-xl cursor-pointer">
      <p>Add New Location</p>
      <icon-plus />
    </nuxt-link>
    <ul>
      <li v-for="user in users" :key="user.id">
        <office-card v-bind="user" @delete="deleteCard" />
      </li>
    </ul>
  </div>
</template>
<script>
import { users } from '~/static/data'

export default {
  name: 'Ofices',
  data () {
    return {
      users: []
    }
  },
  methods: {
    deleteCard (toDeleteId) {
      const toDeleteIndex = this.users.findIndex(({ id }) => id === toDeleteId)
      this.users[toDeleteIndex].deleted = true

      setTimeout(() => this.users = this.users.filter(({ id }) => id !== toDeleteId), 300)
    }
  },
  created () {
    this.users = users.map(item => {
      item.deleted = false
      return item
    })
  }
}
</script>
