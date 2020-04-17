import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '@/Constant'
import {
  get
} from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    [Constant.Mutation.posts]: (state, payload) => {
      state.posts = payload
    }
  },
  actions: {
    [Constant.Action.setPosts]: async ({ commit }) => {
      const { data } = await get.posts

      commit(Constant.Mutation.posts, data)
    }
  },
  getters: {
    [Constant.Getter.posts]: (state) => state.posts
  }
})
