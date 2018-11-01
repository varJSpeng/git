import Vue from 'vue'
import Vuex from 'vuex'
// 引入login 模块
import login from "../js/index"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    // 通过modules属性引入login 模块。
    modules: {
        login: login
    }
})
export default store