import { shallowMount } from '@vue/test-utils'
import IconArrow from '../IconArrow'
import IconCheck from '../IconCheck'
import IconPencil from '../IconPencil'
import IconTrash from '../IconTrash'

const icons = [
  {
    title: 'IconArrow',
    component: IconArrow,
    propsData: {
      strokeWidth: 3
    }
  },
  {
    title: 'IconCheck',
    component: IconCheck,
    propsData: {
      stroke: 'pink',
      strokeWidth: 10
    }
  },
  {
    title: 'IconPencil',
    component: IconPencil,
    propsData: {
      stroke: '#fafafa'
    }
  },
  {
    title: 'IconTrash',
    component: IconTrash,
    propsData: {
      stroke: 'purple'
    }
  }
]

const factory = (component, propsData) => {
  return shallowMount(component, { propsData })
}

icons.forEach(({ title, component, propsData }) => {
  describe(title, () => {
    test(`${title} renders properly`, () => {
      const wrapper = factory(component, propsData)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
