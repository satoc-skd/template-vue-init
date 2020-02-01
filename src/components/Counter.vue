<script>
export default {
    props: {
        maxValue: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        },
        setMinValue() {
            this.count = 0;
        },
        setMaxValue() {
            this.count = this.maxValue;
        },
    },
    computed: {
        isMinValue() {
            return this.count <= 0; 
        },
        isMaxValue() {
            return this.count >= this.maxValue;
        },
    },
}
</script>

<template>
    <!-- align-items-centerでテキストをボタンの中央に配置する -->
    <!-- align-middleでは何故か効かない… -->
    <div class="row text-center align-items-center">
        <b-button class="col-2" @click="setMinValue" :disabled="this.isMinValue">＜＜</b-button>
        <b-button class="col-2" @click="decrement" :disabled="this.isMinValue">ー</b-button>
        <span class="col-4">{{ count }}</span>
        <b-button class="col-2" @click="increment" :disabled="this.isMaxValue">＋</b-button>
        <b-button class="col-2" @click="setMaxValue" :disabled="this.isMaxValue">＞＞</b-button>
    </div>
</template>
