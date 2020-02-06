<script>
import Counter from './Counter';
import LimitT from './LimitTime';
import DispJ from './DispJson';

const srcJson = require('../assets/data.json');

export default {
    components: {Counter, LimitT, DispJ},
    data() {
        return {
            title: 'template-vue-init',
            welcomeMsg: [
                'カウンターコンポーネント＋BootstrapVue（可変）',
                'Day.jsのテスト',
                'JSONのテスト',
            ],
            jsondata: srcJson,
        };
    },
};
</script>


<template>
  <main>
    <h1><b-icon-alarm />{{ title }}<b-icon-alarm-fill /></h1>
    <article>
      <h2>{{ welcomeMsg[0] }}</h2>
      <div class="container">
        <counter :max-value="20" />
        <counter :max-value="7" />
      </div>
    </article>
    <article>
      <h2>{{ welcomeMsg[1] }}</h2>
      <LimitT />
    </article>
    <article>
      <h2>{{ welcomeMsg[2] }}</h2>
      <section>
        <h3>App.vueから直接</h3>
        <p>{{ jsondata }}</p>
        <h3>子コンポーネントに渡す</h3>
        <DispJ :arg1="jsondata" />
      </section>
    </article>
  </main>
</template>

<style scoped>
    * {
        border: 1px solid red;
    }
    .container > .row {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
    }
</style>
