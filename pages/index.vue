<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h2 class="font-bold text-5xl">Sneakers Land</h2>
        <p class="mt-2">Место знакомства с брендами ❤️</p>
        <p class="mt-20 text-stone-400">Чтобы узнать подробности о каком-нибудь бренде, нажми на название компании!</p>
        <div class="relative h-full w-full overflow-visible">
            <img alt="Sneakers"
                 class="absolute left-1/2 top-24 h-60 transform transition-all blur-[1px] hover:blur-0 hover:scale-105 -rotate-12"
                 src="~assets/landing_sneakers1.png" @click="navigateTo('/brands/reebok')">
            <img alt="Sneakers"
                 class="absolute left-56 -top-56 h-60 transform transition-all blur-[1px] hover:blur-0 hover:scale-105 -rotate-12"
                 src="~assets/landing_sneakers2.png" @click="navigateTo('/brands/nike')">
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>