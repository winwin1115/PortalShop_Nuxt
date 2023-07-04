export const state = () => ({
  catId: null,
  breadData: [
    {
      text: '総合トップ',
      disabled: false,
      href: '/'
    },
    {
      text: null,
      disabled: false,
      href: null
    },
  ],
})

export const getters = {
  getCategoryId(state) {
    return state.catId
  },
  getBreadData(state) {
    return state.breadData
  }
}

export const mutations = {
  SET_CATEGORY: (state, catId) => {
    state.catId = catId
  },
  SET_BREAD_DATA: (state, subtitle, href) => {
    state.breadData[1].text = subtitle
    state.breadData[1].href = href
  },
}

export const actions = {}
