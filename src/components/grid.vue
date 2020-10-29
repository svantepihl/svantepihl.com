<template>
    <div id="links" class="grid grid-cols-2 gap-x-0 gap-y-0 w-screen h-24 md:h-64 lg:half-window  relative">
            <div class="bg-black flex items-center justify-center grid-item left text-sm  lg:text-2xl">
                <a href="https://github.com/svantepihl" target="_blank" class=" w-full h-full flex items-center justify-center">
                <Matrix class="opacity-100 lg:opacity-50 hover:opacity-100 hover-fade"></Matrix>
                <h1 class="text-white absolute "> GITHUB </h1>
                </a>
            </div>

        <div class="flex items-center justify-center grid-item right linkedin text-sm lg:text-2xl">
            <a href="https://www.linkedin.com/in/svantepihl/" target="_blank" class=" w-full h-full flex items-center justify-center">
            <h1 class="text-white absolute "> LINKEDIN </h1>
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





.grid-item {
    transition: opacity 0.3s;
    transition:  2s;
}



@media (hover: hover) and (pointer:fine) {
    .right:hover {
        margin-left: calc(-100%);
    }
    .left:hover {
    margin-right: calc(-100%);
}
.grid-item:hover {
    z-index: 10;
    font-size: 200%;
    transition-delay: 0.4s;
}
}


.linkedin {
    background-color: #2867B2;
}


</style>