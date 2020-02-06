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
        };
    },
    computed: {
        isMinValue() {
            return this.count <= 0; 
        },
        isMaxValue() {
            return this.count >= this.maxValue;
        },
    },
    methods: {
        increment(newValue) {
            if ( (this.count + newValue) > this.maxValue ) {
                this.count = this.maxValue;
                return;
            }
            this.count += newValue;
        },
        decrement(newValue) {
            if ( (this.count - newValue) < 0 ) {
                this.count = 0;
                return;
            }
            this.count -= newValue;
        },
    },
};
</script>

<template>
  <!-- align-items-centerでテキストをボタンの中央に配置する -->
  <!-- align-middleでは何故か効かない… -->
  <div class="row text-center align-items-center">
    <b-button
      class="col-2"
      :disabled="isMinValue"
      @click="decrement(10)"
    >
      －１０
    </b-button>
    <b-button
      class="col-2"
      :disabled="isMinValue"
      @click="decrement(1)"
    >
      －
    </b-button>
    <span class="col-4">{{ count }}</span>
    <b-button
      class="col-2"
      :disabled="isMaxValue"
      @click="increment(1)"
    >
      ＋
    </b-button>
    <b-button
      class="col-2"
      :disabled="isMaxValue"
      @click="increment(10)"
    >
      ＋１０
    </b-button>
  </div>
</template>
