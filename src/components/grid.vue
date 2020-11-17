<template>
    <div id="links" class="grid grid-cols-2 gap-x-0 gap-y-0 w-screen h-24 md:h-64 lg:half-window  relative">
            <div class="bg-black flex items-center justify-center grid-item left text-sm  lg:text-2xl">
                <a href="https://github.com/svantepihl" target="_blank" class=" w-full h-full flex items-center justify-center">
                <Matrix class="opacity-100 lg:opacity-50 hover:opacity-100 hover-fade"></Matrix>
                <g-image src="../assets/icons/github.png" blur="none" width="90%" class="absolute logo" alt="Github logo"></g-image>
                </a>
            </div>

        <div class="flex items-center justify-center grid-item right linkedin text-sm lg:text-2xl">
            <a href="https://www.linkedin.com/in/svantepihl/" target="_blank" class=" w-full h-full flex items-center justify-center">
            <g-image src="../assets/icons/linkedin.png" blur="none" class="absolute logo" alt="LinkedIn logo"></g-image>
            </a>
        </div>
    </div>
</template>

<script>

import Matrix from '../components/matrix.vue';

export default {
    name: "Grid",
    components: {Matrix},
}
</script>

<style>
.half-window{
    height: 50vh;
}

.logo {
    transition: all .5s ease-in;
}

@media (hover: hover) and (pointer:fine) {
.grid-item:hover .logo {
    transform: scale(1.3);
}
}


.linkedin {
    background-color: #005e91;
}


</style>