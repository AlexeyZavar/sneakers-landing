<template>
    <div>
        <header class="fixed w-full top-0 flex justify-center items-center bg-transparent z-10">
            <div class="mt-4 w-5/6 shadow-lg border rounded-xl p-4 flex justify-between bg-white">
                <h1 class="font-extrabold text-2xl cursor-pointer" @click="navigateTo('/')">Sneakers Land</h1>
                <div class="flex flex-row items-center space-x-8">
                    <div
                            v-for="brand in brands"
                            :key="brand"
                            :class="{
                        'brand-active': currentBrand === brand
                    }"
                            class="brand-header"
                            @click="navigateTo(`/brands/${brand.toLowerCase()}`)">
                        <Icon :name="getIcon(brand)" size="32"/>
                        <p>{{ brand }}</p>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script lang="ts" setup>
import {useRoute} from "#app";

const route = useRoute()

const brands = ['Nike', 'Adidas', 'Puma', 'Converse', 'Reebok']
const currentBrand = computed(() => brands.find(value => value.toLowerCase() === route.path.split('/').at(-1)))

function getIcon(brandName: string) {
    switch (brandName) {
        case "Nike":
            return 'simple-icons:nike'
        case "Adidas":
            return 'gg:adidas'
        case "Puma":
            return 'simple-icons:puma'
        case "Converse":
            return 'game-icons:converse-shoe'
        case "Reebok":
            return 'simple-icons:reebok'
    }
}
</script>

<style lang="postcss" scoped>
.brand-header {
    @apply flex space-x-1 items-center cursor-pointer px-2 rounded text-xl;
}

.brand-active {
    @apply bg-stone-300 font-bold;
}
</style>