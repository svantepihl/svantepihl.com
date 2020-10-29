<template>
  <div id="container" class="w-screen h-screen font-mono bg-black">
    <transition name="slide" enter-active-class="slideInDown" leave-active-class="slideOutUp">
      <Terminal v-if="showTerminal"></Terminal>
      </transition>
    <MainPage v-if="!showTerminal" ></MainPage>
    <Grid v-if="!showTerminal"></Grid>
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
      setTimeout(() => this.showTerminal = false, 10000)
    }
	}
</script>

<style>
html,
body {
  margin: 0 auto;
  height: 100%;
}

pre {
  padding: 0;
  margin: 0;
}

.load {
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  background: black;
}

.term {
  font-family: monospace;
  color: #fff;
  opacity: 0.8;
  font-size: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 10px;
  padding-left: 20px;
}

.term:after {
  content: "_";
  opacity: 1;
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
