import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // データの格納場所
  state: {
    message: 'Hello from Vuex',
    counter: 0,
    cartItems: ['キーボード', 'DVD', '本', 'マウス']
  },
  // メソッドの定義場所
  mutations: {
    // state → stateの値
    // payload → component側からの値を反映させる事ができる。
    increment(state, payload) {
      state.counter += payload;
    }
  },
  // getters 算出プロパティ
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  // actionsの用途
  // mutationsをコミットする
  // 非同期の処理を記述
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        // context.commit('mutations名') → mutationsのincrementを実行
        context.commit('increment', payload);
      }, 1000);
    }
  },
  modules: {}
})
