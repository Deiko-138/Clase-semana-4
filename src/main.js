import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import Primevue from 'primevue/config'
import material from '@primeuix/themes/material'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import {Avatar,Button,SelectButton,Drawer,Card,Menu, Menubar, Toolbar, Tooltip} from "primevue";
import i18n from "./i18n.js";

createApp(App)
    .use(i18n)
    .use(Primevue, {ripple: true, theme: {preset: Material}})
    .component ('pv-button', Button)
    .component ('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component ('pv-drawer', Drawer)
    .component ('pv-card', Card)
    .component('pv-image', Image)
    .component ('pv-toolbar', Toolbar)
    .component ('pv-menu', Menu)
    .component ('pv-menubar', Menubar)
    .component('tooltip', Tooltip)
    .mount ('#app')