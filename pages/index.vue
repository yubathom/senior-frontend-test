<template>
  <div>
    <section>
      <office-card
        :id="1"
        title="Headquarters"
        address="3763 W. Dallas St."
        name="Hellena John"
        role="Software Tester"
        email="geogia.young@example.com"
        phone="(808) 555-0111"
        :colorIndex="0"
        :colors="colors"
        @delete="deleteCard"
      />
      <office-card
        :id="2"
        title="Headquarters"
        address="3763 W. Dallas St."
        name="Hellena John"
        role="Software Tester"
        email="geogia.young@example.com"
        phone="(808) 555-0111"
        :colorIndex="3"
        :colors="colors"
      />
    </section>
  </div>
</template>
<script>
const colors = [
  'accent-yellow',
  'accent-red',
  'accent-blue',
  'primary-grey',
  'primary-darkblue'
]

export default {
  name: 'Ofices',
  data () {
    return {
      colors
    }
  },
  methods: {
    deleteCard (id) {}
  }
}
</script>
