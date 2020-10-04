export const state = () => ({
  tooltipDisplay: false,
  tooltipMessage: ''
})

export const actions = {
  setTooltip: ({ commit }, message) => {
    commit('SET', { data: true, key: 'tooltipDisplay' })
    commit('SET', { data: message, key: 'tooltipMessage' })
  },
  resetTooltip: ({ commit }) => {
    commit('SET', { data: false, key: 'tooltipDisplay' })
    commit('SET', { data: '', key: 'tooltipMessage' })
  }
}

export const mutations = {
  SET: (state, { data, key }) => { state[key] = data }
}