<template>
    <div class="container">
        <div class="image">
            <img id="monster" src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2020/08/samurai-jack-battle-through-time-aku.jpg">
        </div>
        <h2>Aku</h2>
        <div class="bars">
            <div class="player-health">
                <div class="info">
                <h3>Health</h3>
                <span>{{ state.monsterHealth }} %</span>
                </div>
                <div class="bar health-progress" :style="{width: state.monsterHealth + '%'}"></div>
            </div>
            <div class="player-energy">
                <div class="info">
                    <h3>Energy</h3>
                    <span>{{ state.monsterEnergy }} %</span>
                </div>
                <div class="bar energy-progress" :style="{width: state.monsterEnergy + '%'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        state() {
            return this.$store.getters.state
        }
    }
}
</script>

<style scoped>
#monster {
    height: 100%;
}
</style>