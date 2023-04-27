// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
    googleFonts: {
        families: {
            Inter: true
        }
    },
    // @ts-ignore
    css: ["~/assets/main.pcss"],
})
