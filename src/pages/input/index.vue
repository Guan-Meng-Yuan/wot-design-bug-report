<template>
  <div>digit值:{{ digitValue }}</div>
  <wd-input label="digit类型" v-model="digitValue" type="digit"></wd-input>
  <div>
    <div mr-10rpx>原生组件digit</div>
    <input type="digit" v-model="digitValue">
  </div>
  <div>number值:{{ numberValue }}</div>
  <wd-input label="number类型" v-model="numberValue" type="number"></wd-input>
  <div>
    <div mr-10rpx>原生组件number</div>
    <input @input="onInput" type="digit" v-model="numberValue">
  </div>
</template>

<script setup lang="ts">
const digitValue = ref<number>()
const numberValue = ref<number>()
const onInput = () => {
  console.log('原生组件输入事件')
}
</script>

<style scoped lang="scss">

</style>