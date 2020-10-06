<template>
  <div>
    <form-index v-if="displayForm" @close="resetForm" :userSchema="userSchema" />
    <div @click.prevent="setNewForm" class="flex items-center justify-between p-4 bg-accent-red text-base text-white rounded-lg shadow-xl cursor-pointer" data-test="new-office">
      <p>Add New Location</p>
      <icon-plus />
    </div>

    <ul>
      <li v-for="user in users" :key="user.id">
        <office-card v-bind="user" @delete="deleteCard" @edit="editCard" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { users, userSchema } from '~/static/data'

export default {
  name: 'Ofices',
  data () {
    return {
      displayForm: false,
      users: [],
      userSchema
    }
  },
  methods: {
    ...mapActions('ui', ['setTooltip', 'resetTooltip']),
    async deleteCard (toDeleteId) {
      // todo: rewrite this for an api req
      const toDeleteIndex = this.users.findIndex(({ id }) => id === toDeleteId)
      this.users[toDeleteIndex].deleted = true

      await setTimeout(() => {
        this.users = this.users.filter(({ id }) => id !== toDeleteId)
        this.setTooltip('The location has been deleted')
      }, 300)
    },
    editCard (toEditCardId) {
      this.resetTooltip()
      const query = this.users.find(({ id }) => id === toEditCardId)
      this.$router.replace({
        query: {
          edit: true,
          ...query
        }
      })
      this.userSchema = query
      this.displayForm = true
    },
    setNewForm () {
      this.$router.replace({
        query: {
          ...userSchema
        }
      })
      this.displayForm = true
    },
    resetForm () {
      this.displayForm = false
      this.$router.push({ query: {} })
    }
  },
  created () {
    const { $route } = this
    this.users = users.map(item => {
      item.deleted = false
      return item
    })

    if ($route.query.edit && $route.query.id) {
      this.editCard($route.query.id)
    }
  },
  transition: {
    name: 'grow'
  },
  scrollToTop: true
}
</script>
