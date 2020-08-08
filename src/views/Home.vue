<template>
  <div class="home">
    <h1>{{ $store.state.message }}</h1>
    <p>{{ $store.state.counter }}</p>
    <button @click="increment">カウント</button>
    <h1>gettersの確認</h1>
    <p>{{ cartItemsCount }}</p>

    <!-- ヘルパー -->
    <h1>Vuexヘルパー</h1>
    <!-- mapState -->
    <h4>mapState</h4>
    <p>{{ message }}</p>
    <p>{{ counter }}</p>
    <p>{{ cartItems }}</p>
    <!-- mapMutations -->
    <h4>mapMutations</h4>
    <button @click="increment(10)">mapMutations Increment</button>
    <!-- mapGetters -->
    <h4>mapGetters</h4>
    <p>{{ cartItemsCount }}</p>
    <!-- mapActions -->
    <h4>mapActions</h4>
    <button @click="asyncIncrement(10)">mapActions Increment</button>
  </div>
</template>

<script>
//$store.stateを省略するヘルパーメソッド
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  computed: {
    // ... オブジェクトスプレット演算子
    // mapStateの中にstateのデータ名を記載
    ...mapState({
      message: 'message',
      counter: 'counter',
      cartItems: 'cartItems'
    }),
    ...mapGetters([
      'cartItemsCount'
    ]
    ),
    // gettersの参照
    // cartItemsCount () {
    //   return this.$store.getters.cartItemsCount;
    // }
  },
  methods: {
    // increment: function () {
    //   // storeのmutationである、"increment"を実行する
    //   // 100はpayloadに足される値として渡される
    //   this.$store.commit("increment", 100)
    //   // actionsの"increment"を実行
    //   this.$store.dispatch("increment", 100)
    // }
    ...mapMutations([
      'increment'
    ]),
    ...mapActions({
      asyncIncrement: 'increment'
    })
  }
}
</script>
