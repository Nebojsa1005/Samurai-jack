import { createStore } from 'vuex'

export default createStore({
  state: {
    playerHealth: 60,
    playerEnergy: 70,
    monsterHealth: 80,
    monsterEnergy: 90,
    start: false

  },
  mutations: {
    start ( state ) {
      state.start = true
      state.playerHealth = 100
      state.playerEnergy = 100
      state.monsterHealth = 100
      state.monsterEnergy = 100
    },
    punch( state ) {
      if (state.start) {
        if(state.playerHealth > 0 && state.monsterHealth > 0) {
          let damage = Math.floor(Math.random() * 20)
          state.monsterHealth -= damage
          state.playerEnergy -= Math.floor(Math.random() * 15)
  
          if (state.monsterHealth <= 0) {
             state.monsterHealth = 0
             state.start = false
          }
  
          damage = Math.floor(Math.random() * 30)
          state.playerHealth -= damage
          state.monsterEnergy -= Math.floor(Math.random() * 20)
  
          if (state.playerHealth <= 0) {
             state.playerHealth = 0
             state.start = false
          } 
        }
      }
    },
    special ( state ) {
      if (state.start) {
        if (state.playerHealth > 0 && state.monsterHealth > 0 && state.playerEnergy >= 30) {
          let damage = 30
          state.monsterHealth -= damage
          state.playerEnergy -= 30
    
          if (state.monsterHealth <= 0 ) {
              state.monsterHealth = 0
              state.start = false
          }
        }
      }
    },
    senzu (state) {
      if (state.start) {
        state.playerHealth += 20
        state.playerEnergy += 20
      }
    },
    giveUp (state) {
      if (state.start) {
        state.playerEnergy = 0
        state.playerHealth = 0
        state.start = false
      }
    }
  },
  actions: {
  },
  getters: {
    state (state) {
      return state
    }
  }
})
