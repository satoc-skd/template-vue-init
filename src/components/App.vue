<script>
import Counter from './Counter'

export default {
    components: {Counter},
    data() {
        return {
            title: 'こにゃにゃちわ～',
            welcomeMsg: 'ぽちっとな（０～２０の間）'
        };
    },
}
</script>


<template>
    <div>
        <h1><b-icon-alarm />{{ title }}<b-icon-alarm-fill /></h1>
        <p>{{ welcomeMsg }}</p>
        <counter/>
        <hr />
        <counter/>
    </div>
</template>

<style scoped>
    * {
        border: 1px solid red;
    }
</style>
