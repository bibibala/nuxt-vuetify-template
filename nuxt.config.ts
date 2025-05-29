import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    sourcemap: false,
    app: {
        head: {
            title: 'My Nuxt App',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'My Nuxt 3 + Vuetify 3 Application'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        }
    },
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css',
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        ssr: {
            noExternal: ['vuetify'],
        },
        plugins: [vuetify({autoImport: true})],
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
        }
    },
    devServer: {
        port: 3000,
        host: 'localhost'
    }
})
