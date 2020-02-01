<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            // if (this.count>=20) return;
            this.count += 1
        },
        decrement() {
            // if (this.count<=0) return;
            this.count -= 1
        },
    }
}
</script>

<template>
    <div>
        <b-button @click="decrement" :disabled="this.count<=0">-</b-button>
        <span>{{ count }}</span>
        <b-button @click="increment" :disabled="this.count>=20">+</b-button>
    </div>
</template>