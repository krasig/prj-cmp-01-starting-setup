import { createApp } from 'vue';

import App from './App.vue';
//import LearningResource from './componends/LearningResource.vue';

const app=createApp(App);
//app.component('LearningResource',LearningResource);

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true
}
app.mount('#app');
