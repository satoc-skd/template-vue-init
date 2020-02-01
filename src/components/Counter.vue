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
        increment(newValue) {
            if ( (this.count + newValue) > this.maxValue ) {
                this.count = this.maxValue;
                return;
            };
            this.count += newValue
        },
        decrement(newValue) {
            if ( (this.count - newValue) < 0 ) {
                this.count = 0;
                return;
            };
            this.count -= newValue
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
        <b-button class="col-2" @click="decrement(10)" :disabled="this.isMinValue">－１０</b-button>
        <b-button class="col-2" @click="decrement(1)" :disabled="this.isMinValue">－</b-button>
        <span class="col-4">{{ count }}</span>
        <b-button class="col-2" @click="increment(1)" :disabled="this.isMaxValue">＋</b-button>
        <b-button class="col-2" @click="increment(10)" :disabled="this.isMaxValue">＋１０</b-button>
    </div>
</template>
