<template>
    <div class="flex flex-col space-y-1 cursor-pointer transition-all hover:scale-105"
         @click="navigateTo(`/sneakers/${props.id}`)">
        <img :alt="sneakers.name" :src="useAsset(`sneakers/${sneakers.mainPreview}`)" class="h-[400px] w-[400px] brightness-[95%]">
        <p class="font-bold">{{ sneakers.name }}</p>
        <p>{{ sneakers.price }} $</p>
    </div>
</template>

<script lang="ts" setup>
import {getSneakers} from "~/data";

const props = defineProps<{
    id: string
}>()

const sneakers = getSneakers(props.id)

function useAsset(path: string): string {
    const assets = import.meta.glob('~/assets/**/*', {
        eager: true,
        import: 'default',
    })

    // @ts-expect-error: wrong type info
    return assets['/assets/' + path]
}
</script>

<style scoped>

</style>