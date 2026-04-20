<script setup>
import {useI18n, usei18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<div class="grid bg-primary mt-4 align-content-start">
  <div class = "col-12 ml-3 align-items-center justify-content-center">
    <p>Copyrigth &copy; 2026 ACME Studios</p>
  </div>
  <div class = "col-12 ml-3 align-items-center justify-content-center">
    <p>
      {{('authoring-phrase.intro')}} <i class="pi pi-heart"/>
      {{('authoring-phrase.use')}} <a href="https://primevue.org/" target="_blank" rel="noopener noreferrer">PrimeVue Studios</a>
      {{('authoring-phrase.author' , {brand: 'ACME'})}}
    </p>
    <p>
      {{t('footer powered-by')}} <a href="https://www.newsapi.org">NewsAPI.org</a>
      {{t('footer.and')}} <a href="https://logo.dev">Logo.dev Logo API</a>
    </p>
  </div>
</div>
</template>

<style scoped>

</style>