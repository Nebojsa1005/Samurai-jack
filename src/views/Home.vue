<template>
  <div class="home">
  <div class="cards">
      <app-player></app-player>
      <app-monster></app-monster>
  </div>
    <button v-show="!state.start" @click="start">Start</button>
  </div>
</template>

<script>
  import appPlayer from '../components/Player.vue'
  import appMonster from '../components/Monster.vue'
  export default {
    components: {
      appPlayer,
      appMonster
    },
    methods: {
      start() {
        this.$store.commit('start')
      }
    },
    computed: {
    state () {
      return this.$store.getters.state
    }
  }
  }
</script>


<style scoped>
.home {
  background: url('https://wallpaperaccess.com/full/3490503.png') ;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column
}

.cards {
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 30px;
  outline: none;
  padding: 20px;
  font-size: 25px;
  background: #ffa500;
  color: #1E1300;
  width: 150px;
  cursor: pointer;
  transition: all 0.2s ease
}

button:hover {
  transform: scale(1.4)
}

</style>