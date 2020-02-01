<script>
import Counter from './Counter'
import LimitT from './LimitTime'

export default {
    components: {Counter, LimitT},
    data() {
        return {
            title: 'template-vue-init',
            welcomeMsg: [
                'カウンターコンポーネント＋BootstrapVue（可変）',
                'Day.jsのテスト'
            ],
        };
    },
}
</script>


<template>
    <main>
        <h1><b-icon-alarm />{{ title }}<b-icon-alarm-fill /></h1>
        <article>
            <h2>{{ welcomeMsg[0] }}</h2>
            <div class="container">
                <counter :max-value="20"/>
                <counter :max-value="7"/>
            </div>
        </article>
        <article>
            <h2>{{ welcomeMsg[1] }}</h2>
            <LimitT/>
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
