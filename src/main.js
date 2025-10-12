import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './componends/UI/BaseCard.vue';
import BaseButton from './componends/UI/BaseButton.vue';
import BaseDialog from './componends/UI/BaseDialog.vue';

const app=createApp(App);
app.component('BaseCard',BaseCard);
app.component('BaseButton',BaseButton);
app.component('BaseDialog',BaseDialog);

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true
}
app.mount('#app');
