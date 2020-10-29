<template>
  <div id="container" class="w-screen h-screen font-mono bg-white">
    <transition name="slide" enter-active-class="slideInDown" leave-active-class="slideOutUp">
      <Terminal v-if="showTerminal"></Terminal>
    </transition>
    <transition name="slowFade">
      <MainPage key="1" v-if="!showTerminal"></MainPage>
    </transition>
      <Grid key="2" v-if="!showTerminal"></Grid>
  </div>
</template>

<script>
  import Terminal from '../components/terminal.vue';
  import MainPage from '../components/mainpage.vue';
  import Grid from '../components/grid.vue';

  	export default {
    components: {Terminal,MainPage,Grid},
    data() {
      return {
        showTerminal: true
      }
    },
    created() {
      setTimeout(() => this.showTerminal = false, 8500)
    }
	}
</script>

<style>

.slowFade-enter-active, .slowFade-leave-active {
  transition: opacity 1s;
  transition-delay: 1.5s;
}
.slowFade-enter, .slowFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
