import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//VUEX
import { createStore } from 'vuex'
import store from './store/index.js'

//AXIOS
import axios from './axios'
import VueAxios from 'vue-axios'

const LightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#3880f4',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}


const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme: 'LightTheme',
        themes:{
            LightTheme
        }
    }
})


const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(createStore(store))
app.use(VueAxios, axios)
app.mount("#app")