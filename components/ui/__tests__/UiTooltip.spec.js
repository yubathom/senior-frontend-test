import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import UiTooltip from '../UiTooltip'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  resetTooltip: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    ui: {
      actions,
      namespaced: true
    }
  }
})

describe('UiTooltip.vue', () => {

  it('dispatches "resetTooltip" when user clicks at the wrapper', () => {
    const wrapper = shallowMount(UiTooltip, { store, localVue })
    const div = wrapper.find('button')

    div.trigger('click')
    expect(actions.resetTooltip).toHaveBeenCalled()
  })
})