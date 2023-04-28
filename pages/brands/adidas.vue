<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="flex items-center">
            <h2 class="font-bold text-5xl">Adidas</h2>
        </div>
        <p class="mt-2">Impossible is Nothing.</p>
        <Icon class="mt-20" name="gg:adidas" size="64"/>
        <p class="mt-20 text-stone-400">Те самые изики по 500$, за которыми выстраиваются целые очереди.</p>
    </div>
    <div class="flex justify-center">
        <Icon class="absolute bottom-10 animate-bounce" name="material-symbols:arrow-drop-down-rounded" size="64"/>
    </div>
    <p id="catalog" class="font-bold text-xl text-center">Каталог самых известных кроссовок</p>
    <div class="mt-8 flex justify-center items-center">
        <div class="grid grid-cols-4 gap-6 w-5/6">
            <sneaker id="adidas1"/>
            <sneaker id="adidas2"/>
            <sneaker id="adidas3"/>
            <sneaker id="adidas4"/>
            <sneaker id="adidas5"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>