import { shallowMount } from "@vue/test-utils";
import IconArrow from "../IconArrow";

const factory = (component, propsData) => {
  return shallowMount(component, { propsData })
}

describe("IconArrow", () => {
  const propsData = {
    strokeWidth: 3
  }
  test("IconArrow renders properly", () => {
    const wrapper = factory(IconArrow, propsData)
    expect(wrapper.html()).toMatchSnapshot()
  })
})