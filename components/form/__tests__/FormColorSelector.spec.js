import { mount } from '@vue/test-utils'
import FormColorSelector from '../FormColorSelector'

describe('FormColorSelector', () => {

  it('is emitting the expected color', () => {
    const wrapper = mount(FormColorSelector, {
        propsData: {
          colors: ['color-1', 'color-2', 'color-3'],
          mainColor: 'color-2'
        }
    })

    const { vm } = wrapper
    expect(vm.selectedIndex === 1).toBe(true)

    vm.change(1)
    expect(wrapper.emitted().setColor[0][1] === 'color-2')
  })
})
