import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '@/Constant'
import { get } from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {
      list: [],
      count: 0,
    },
    detail: {},
  },
  mutations: {
    [Constant.Mutation.posts]: (state, payload) => {
      state.posts.list = payload
    },
    [Constant.Mutation.detail]: (state, payload) => {
      state.detail = payload
    },
    [Constant.Mutation.postCount]: (state, payload) => {
      state.posts.count = payload
    },
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
    [Constant.Action.setPostCount]: ({ state, commit }, count) => {
      console.log(state)

      return new Promise((resolve) => {
        commit(Constant.Mutation.postCount, state.posts.count + count)

        return resolve()
      })
    }
  },
  getters: {
    [Constant.Getter.posts]: (state) => {
      return state.posts.list.splice(0, state.posts.count)
    }
  }
})
