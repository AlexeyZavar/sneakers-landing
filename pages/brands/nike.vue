<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="flex items-center">
            <h2 class="font-bold text-5xl">Nike</h2>
        </div>
        <p class="mt-2">Just Do It.</p>
        <Icon class="mt-20" name="simple-icons:nike" size="64"/>
        <p class="mt-20 text-stone-400">Этот бренд смог завоевать доверие многих покупателей за счёт качества и удобства
            своей продукции.</p>
    </div>
    <div class="flex justify-center">
        <Icon class="absolute bottom-10 animate-bounce" name="material-symbols:arrow-drop-down-rounded" size="64"/>
    </div>
    <p id="catalog" class="font-bold text-xl text-center">Каталог самых известных кроссовок</p>
    <div class="mt-8 flex justify-center items-center">
        <div class="grid grid-cols-4 gap-6 w-5/6">
            <sneaker id="nike1"/>
            <sneaker id="nike2"/>
            <sneaker id="nike3"/>
            <sneaker id="nike4"/>
            <sneaker id="nike5"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>