// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=1920px'}
            ]
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
    googleFonts: {
        families: {
            Inter: true
        }
    },
    // @ts-ignore
    css: ["~/assets/main.pcss"],
})
