<script>
export default {
    props: {
        arg1: {
            type: Array,
            required: true,
        },
    }
}
</script>

<template>
    <div>
        <h5>引数[arg1]の中身↓</h5>
        <p>{{ this.arg1 }}</p>
    </div>
</template>
