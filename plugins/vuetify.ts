import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        primary: '#1867C0',
                        secondary: '#5CBBF6',
                        accent: '#82B1FF',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107',
                    },
                },
                dark: {
                    colors: {
                        primary: '#2196F3',
                        secondary: '#424242',
                        accent: '#FF4081',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FB8C00',
                    },
                },
            },
        },
        defaults: {
            VBtn: {
                variant: 'elevated',
                color: 'primary',
            },
            VCard: {
                rounded: 'lg',
            },
            VTextField: {
                variant: 'outlined',
                density: 'comfortable',
            },
        },
        ssr: true,
    })
    app.vueApp.use(vuetify)
})
