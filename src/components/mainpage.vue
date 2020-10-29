<template>
  <div class="w-full h-full bg-white flex items-center justify-start">
      <div class=" ml-3 text-left mt-32 xxs:mt-40 xs:mt-48 md:mt-56 lg:mt-56 xl:mt-64">
        <h1 class="text-md md:text-6xl">svante pihl</h1>
        <a class="" href="mailto:hej@svantepihl.com">
          <h3 class="xs:text-md md:text-2xl"> &lt;hej@svantepihl.com&gt;</h3>
        </a>
      </div>
      <div class="bottom-0 absolute flex items-end justify-center bottom-10 animate-bounce animation-delay">
        <a href="#links" v-smooth-scroll>
          <p class=" text-base xs:text-lg md:text-xl lg:text-xl transform rotate-90 mb-4 xl:mb-12">--></p>
        </a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.animation-delay {
  animation-delay: 1.2s;
}

</style>>