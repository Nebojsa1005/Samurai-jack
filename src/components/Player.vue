<template>
    <div class="container">
        <div class="image">
            <img src="https://external-preview.redd.it/nDkbwyJ--sgMA-MvR9QWXPYO26d_eOeRuFpB_GRwmS0.jpg?auto=webp&s=43174f892ce265ff5ffcdd3152a35633630d5a18">
        </div>
        <h2>Samurai Jack</h2>
        <div class="bars">
            <div class="player-health">
                <div class="info">
                    <h3>Health</h3>
                    <span>{{ state.playerHealth }} %</span>
                </div>
                <div class="bar health-progress" :style="{width: state.playerHealth + '%'}"></div>
            </div>
            <div class="player-energy">
                <div class="info">
                <h3>Energy</h3>
                <span>{{ state.playerEnergy }} %</span>
                </div>
                <div class="bar energy-progress" :style="{width: state.playerEnergy + '%'}"></div>
            </div>
        </div>
        <div class="buttons">
            <div class="box red" @click="punch"><i class="fas fa-fist-raised"></i></div>
            <div class="box blue" @click="special"><i class="fas fa-bomb"></i></div>
            <div class="box green" @click="senzu"><i class="fas fa-plus-circle"></i></div>
            <div class="box black" @click="giveUp"><i class="fas fa-skull-crossbones"></i></div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        punch() {
            this.$store.commit('punch')
        },
        special() {
            this.$store.commit('special')
        },
        senzu() {
            this.$store.commit('senzu')
        },
        giveUp() {
            this.$store.commit('giveUp')
        }
    },
    computed: {
        state() {
            return this.$store.getters.state
        }
    }
}
</script>

<style>
.container {
    width: 18%;
    height: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1c4267;
    border: 2px solid black;
    border-radius: 10px;
    margin: 0 50px;
    padding-bottom: 10px;
    transition: transform 0.2s ease
}

.container:hover {
    transform: scale(1.1)
}

.image {
    height: 300px;
    width: 100%;
    overflow: hidden;
}

.image img {
    width: 100%;
    background: orange;
}

.container h2,
.container h3 {
    margin: 15px 0 0 0 ;
    color: white;
}

.bars {
    width: 90%;
    margin-top: 15px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}

.player-health,
.player-energy {
    width: 90%;
    height: 10px;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: white;
}

.info h3 {
    font-weight: 300
    
}

.bar {
    transition: width 200ms ease-out;
}

.health-progress {
    margin-bottom: 20px;
    width: 100%;    
    height: 10px;
    background: red
}

.energy-progress {   
    height: 10px;
    background: #45b6d6
}

.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 90%;
    margin: 40px 0 0 0;

}

.box {
    padding: 5px;
    cursor: pointer;
    font-size: 30px;
    transition: transform 0.3s ease;
    outline: none;
}

.box:hover {
    transform: scale(1.2);
    opacity: 0.8
}

.red {
    color: #FF1919;
}

.blue {
    color: #6ccde0
}

.green {
    color: green
}

.black {
    color: black;
}
</style>