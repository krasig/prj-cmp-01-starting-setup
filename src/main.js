import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './componends/UI/BaseCard.vue';

const app=createApp(App);
app.component('BaseCard',BaseCard);

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true
}
app.mount('#app');
