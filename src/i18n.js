import {createI18n} from "vue-i18n";

import en from "./locales/en.json"
import en from "./locales/es.json"

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLng: 'en',
    messages: {en,es}
});
export default i18n;