<script>
export default {
    props: {
        arg1: {
            type: Array,
            required: true,
        },
    },
    data () {
        return {
            selectedType: 1,
            typeOptions: [
                { text: '普通停車', value: '1' },
                { text: '準急停車', value: '2' },
                { text: '急行停車', value: '4' },
            ],
        };
    }
};
</script>

<template>
  <div>
    <h5>引数[arg1]の中身↓</h5>
    <b-form-group label="停車駅">
      <b-form-radio-group
        v-model="selectedType"
        name="some-radios"
        :options="typeOptions"
        buttons
        button-variant="primary"
      />
    </b-form-group>
    <p
      v-for="i1 in arg1"
      v-show="(i1.Type & selectedType) > 0"
      :key="i1.key"
    >
      {{ i1.StationName }}({{ i1.StationNumber }})
    </p>
  </div>
</template>
