<template>
  <div class="w-full h-full bg-white flex items-center xl:justify-center justify-start">
      <div class=" ml-3 text-left">
        <h1 class="text-md md:text-6xl">svante pihl</h1>
        <a class="xl:text-center" href="mailto:hej@svantepihl.com">
          <h3 class="xs:text-md md:text-2xl"> &lthej@svantepihl.com&gt</h3>
        </a>
      </div>
      <div class="bottom-0 absolute flex items-end justify-center bottom-10 animate-bounce animation-delay">
        <a href="#links" v-smooth-scroll>
          <p class=" text-base xs:text-lg md:text-4xl transform rotate-90 mb-4 md:mb-24">--></p>
        </a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.animation-delay {
  animation-delay: 10.5s;
}

</style>