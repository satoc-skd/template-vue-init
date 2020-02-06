import Vue from 'vue';

// Install BootstrapVue
// 必要最低限のコンポーネントを組み込む
// https://bootstrap-vue.js.org/docs/components/form-radio#importing-as-a-plugin
// https://bootstrap-vue.js.org/docs/components/button#importing-as-a-plugin
// https://bootstrap-vue.js.org/docs/components/form-group#importing-as-a-plugin
import { ButtonPlugin, FormRadioPlugin, FormGroupPlugin  } from 'bootstrap-vue';
Vue.use(ButtonPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormGroupPlugin);

// 必要最低限のアイコンセットを組み込む
// https://bootstrap-vue.js.org/docs/icons#module-bundlers
import { BIconAlarm, BIconAlarmFill } from 'bootstrap-vue';
Vue.component('BIconAlarm', BIconAlarm);
Vue.component('BIconAlarmFill', BIconAlarmFill);

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';


import App from './components/App';

new Vue({
    el: '#app',
    // vueランタイム限定ビルドを使う場合は以下の記述が必要
    render: h => h(App),
});
