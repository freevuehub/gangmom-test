import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '@/Constant'
import { get } from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {
      list: [],
      postCount: 8,
    },
    detail: {},
  },
  mutations: {
    [Constant.Mutation.posts]: (state, payload) => {
      state.posts.list = payload
    },
    [Constant.Mutation.detail]: (state, payload) => {
      state.detail = payload
    }
  },
  actions: {
    [Constant.Action.setPosts]: async ({ commit }) => {
      const { data } = await get.posts

      commit(Constant.Mutation.posts, data)
    },
    [Constant.Action.setDetail]: async ({ commit }, id) => {
      const { data } = await get.detail(id)

      commit(Constant.Mutation.detail, data)
    },
  },
  getters: {
    [Constant.Getter.posts]: (state) => {
      return state.posts.list.splice(0, state.posts.postCount)
    }
  }
})
