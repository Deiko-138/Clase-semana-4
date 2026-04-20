import App from "../../app.vue";

const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apikey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

export class logoDevApi extends App {
    getUrlToLogo(domain){
        return `${logoApiUrl}/${new URL(domain).host}?token=${apikey}`;
    }
}