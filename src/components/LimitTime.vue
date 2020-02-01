<script>
import 'dayjs/locale/ja'
import dayjs from 'dayjs'

dayjs.locale('ja')

export default {
    computed: {
        currentDateTime: function() {
            return dayjs().format('YYYY年MM月DD日 dddd HH:mm:ss');
        },
        thisLastDay: function() {
            const baseDate = dayjs();

            // １日目でかつ５時を過ぎてない場合は、５時間前に戻して補正する
            var adjustDate;
            if (baseDate.date() === 1 && baseDate.hour() < 5) {
                adjustDate = baseDate.subtract( 5, 'hour' );
            } else {
                adjustDate = baseDate;
            }

            // 翌月１日の（5時間 - 1秒）に補正する
            return adjustDate.startOf('month').add(1, 'month').add(5, 'hour').subtract(1, 'second').format('YYYY年MM月DD日 dddd HH:mm');
        },
    },
}
</script>

<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-6">現在日時</div>
            <div class="col-6">任務受託期限</div>
        </div>
        <div class="row">
            <div class="col-6">{{ this.currentDateTime }}</div>
            <div class="col-6">{{ this.thisLastDay }}まで</div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        background-color: yellowgreen;
    }
    /* 最初の行だけ下線を引く */
    .row:first-child {
        background-color: cornflowerblue;
        border-bottom : 2px solid black;
    }
    /* 最初の列だけ右線を引く */
    .col-6:first-child {
        border-right :4px double black;
    }
</style>
