<template>
  <div>
    <nuxt-link
      tag="div"
      :to="{
        path: '/form',
        query: {
          create: true
        }
      }"
      class="flex items-center justify-between p-4 bg-accent-red text-base text-white rounded-lg shadow-xl cursor-pointer"
    >
      <p>Add New Location</p>
      <icon-plus />
    </nuxt-link>

    <ul>
      <li v-for="user in users" :key="user.id">
        <office-card v-bind="user" @delete="deleteCard" @edit="editCard" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { users } from '~/static/data'

export default {
  name: 'Ofices',
  data () {
    return {
      users: []
    }
  },
  methods: {
    ...mapActions('ui', ['setTooltip', 'resetTooltip']),
    async deleteCard (toDeleteId) { // todo: rewrite this for an api req
      const toDeleteIndex = this.users.findIndex(({ id }) => id === toDeleteId)
      this.users[toDeleteIndex].deleted = true

      await setTimeout(
        () => {
          this.users = this.users.filter(({ id }) => id !== toDeleteId)
          this.setTooltip('The location has been deleted')
          },
        300
      ) 
    },
    editCard (toEditCardId) {
      this.resetTooltip()
      const query = this.users.find(({ id }) => id === toEditCardId)
      this.$router.push({
        path: `/form`,
        query
      })
    }
  },
  created () {
    this.users = users.map(item => {
      item.deleted = false
      return item
    })
  },
  transition: {
    name: 'grow'
  },
   scrollToTop: true
}
</script>