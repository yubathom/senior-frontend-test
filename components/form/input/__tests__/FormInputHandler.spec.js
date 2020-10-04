import { mount } from '@vue/test-utils'
import FormInputHandler from '../FormInputHandler'

describe('FormInputHandler', () => {
  const propsData = {
    name: 'test',
    minlength: 3,
    type: 'text',
    placeholder: 'foo',
    initialValue: 'bar'
  }

  const wrapper = propsData => mount(FormInputHandler, { propsData })

  it('is properly rendering', () => {
    expect(wrapper(propsData).html()).toMatchSnapshot()
  })

  it('test a valid text input', () => {
    const { vm } = wrapper(propsData)
    expect(vm.valid).toBe(true)
    expect(vm.error).toBe(false)
  })
  it('test a invalid text input', () => {
    let currentProp = propsData
    currentProp.initialValue = 'b' // smaller than current minlength -> 3

    const { vm } = wrapper(currentProp)
    expect(vm.valid).toBe(false)
  })
  it('test a valid email input', () => {
    let currentProp = propsData
    currentProp.type = 'email'
    currentProp.initialValue = 'email@email.com'

    const { vm } = wrapper(currentProp)
    expect(vm.valid).toBe(true)
  })
  it('test a invalid email input', () => {
    let currentProp = propsData
    currentProp.type = 'email'
    currentProp.initialValue = 'not a email'

    const { vm } = wrapper(currentProp)
    expect(vm.valid).toBe(false)
  })
  it('test valid phone numbers', () => {
    let currentProp = propsData
    currentProp.type = 'phone'

    const validNumbers = [
      '(333)333-333',
      '123456789',
      '333 333 333'
    ]

    validNumbers.forEach(num => {
      currentProp.initialValue = num
      const { vm } = wrapper(currentProp)
      expect(vm.valid).toBe(true)
    })
  })
  it('test invalid phone numbers', () => {
    let currentProp = propsData
    currentProp.type = 'phone'

    const invalidNumbers = [
      'qweqweasd',
      '1234qwe789',
      '333@333&*(333'
    ]

    invalidNumbers.forEach(num => {
      currentProp.initialValue = num
      const { vm } = wrapper(currentProp)
      expect(vm.valid).toBe(false)
    })
  })
})
