import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '@/Constant'
import {
  get
} from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {
      list: [],
      count: 0,
    },
    detail: {},
    comments: [],
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
    [Constant.Mutation.comments]: (state, payload) => {
      state.comments = payload
    },
  },
  actions: {
    [Constant.Action.setPosts]: async ({
      commit
    }) => {
      const {
        data
      } = await get.posts
      const users = await get.users

      commit(Constant.Mutation.posts, data.map((item) => {
        const [user] = users.data.filter((user) => user.id === item.userId)

        return {
          ...item,
          user
        }
      }))
    },
    [Constant.Action.setDetail]: async ({
      commit
    }, id) => {
      const {
        data
      } = await get.detail(id)

      commit(Constant.Mutation.detail, data)
    },
    [Constant.Action.setPostCount]: ({
      state,
      commit
    }, count) => {
      return new Promise((resolve, reject) => {
        const addCount = state.posts.count + count

        if (state.posts.list.length && state.posts.list.length <= addCount) {
          return reject()
        }

        setTimeout(() => {
          commit(Constant.Mutation.postCount, addCount)

          return resolve()
        }, 800)
      })
    },
    [Constant.Action.setDetailToList]: ({
      state,
      commit,
      dispatch
    }, id) => {
      return new Promise(async (resolve, reject) => {
        if (!state.posts.list.length) {
          await dispatch(Constant.Action.setPosts)
        }

        const [detail] = state.posts.list.filter((item) => item.id === Number(id))

        if (!detail) {
          return reject()
        }

        commit(Constant.Mutation.detail, detail)

        return resolve()
      })
    },
    [Constant.Action.setComments]: async ({
      commit
    }, id) => {
      const {
        data
      } = await get.comments(id)

      commit(Constant.Mutation.comments, data)
    }
  },
  getters: {
    [Constant.Getter.posts]: (state) => {
      return state.posts.list.slice(0, state.posts.count)
    },
    [Constant.Getter.detail]: (state) => {
      return state.detail
    },
    [Constant.Getter.comments]: (state) => {
      return state.comments
    },
  }
})