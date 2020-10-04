import { mount } from '@vue/test-utils'
import FormInput from '../FormInput'

describe('FormInput', () => {
  const wrapper = mount(FormInput, {
    propsData: {
      name: 'name',
      label: 'Name',
      minlength: 3,
      required: true,
      type: 'text',
      initialValue: 'foo'
    }
   })

  it('should emit correctly on input change', async () => {
    const { vm } = wrapper
    const input = wrapper.find('input')
    input.element.value = 'bar'

    expect(wrapper.emitted()).toBeTruthy()
    expect(vm.initialValue === 'foo').toBe(true) // parent updated
  })

  it('should create the correct error message on input error', () => {
    const { vm } = wrapper
    const input = wrapper.find('input')
    input.element.value = ''
    expect(vm.errorMessage === 'This field cannot be empty').toBe(true)
  })

})
