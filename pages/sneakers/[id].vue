<template>
    <div class="mt-28 flex justify-center w-full">
        <div class="w-5/6">
            <div class="flex space-x-2 items-center cursor-pointer" @click="navigateTo(brandUrl)">
                <Icon name="material-symbols:arrow-back-rounded" size="32"/>
                <p>Вернуться к каталогу</p>
            </div>
            <div class="mt-8">
                <div class="grid grid-cols-[640px_1fr] gap-4">
                    <div class="flex space-x-2">
                        <div class="flex flex-col space-y-2 min-w-[64px]">
                            <div v-for="preview in sneakers.previews" :id="preview" :class="{
                                'preview-active': currentPreview === preview
                            }"
                                 class="preview" @click="currentPreview = preview">
                                <img :src="useAsset(`sneakers/previews/${preview}`)" alt="" class="w-16 h-16">
                            </div>
                        </div>
                        <div class="flex">
                            <img :src="useAsset(`sneakers/previews/${currentPreview}`)" alt="">
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold text-2xl">{{ sneakers.name }}</p>
                        <p>{{ sneakers.price }}.00 $</p>
                        <div class="w-1/2">
                            <p>{{ sneakers.description }}</p>
                        </div>
                        <div v-for="key in Object.keys(sneakers.additional)" :key="key">
                            <p><span class="font-bold">{{ key }}</span>: {{ sneakers.additional[key] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {getSneakers} from "~/data";
import {useRoute} from "#app";

const route = useRoute()
const sneakers = getSneakers(route.params.id as string)
const currentPreview = ref(sneakers.previews[0])

// @ts-ignore
const brandUrl = computed(() => `/brands/${route.params.id.substring(0, route.params.id.length - 1)}#catalog`)

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
.preview {
    @apply transition-all;
}

.preview-active {
    @apply brightness-75;
}
</style>