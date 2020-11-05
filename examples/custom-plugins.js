const myPlugin = {
  install (app, options) {
    app.directive('my-directive', {
      mounted (el, binding) {
        // logic
      }
    });
  }
};

import { createApp } from 'vue';

const app = createApp();

app.use(myPlugin);
app.mount('#app');
