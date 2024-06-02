<template>
  <div>digit值:{{ digitValue }}</div>
  <wd-input label="digit类型" v-model="digitValue" type="digit"></wd-input>
  <div>number值:{{ numberValue }}</div>
  <wd-input label="number类型" v-model="numberValue" type="number"></wd-input>
</template>

<script setup lang="ts">
const digitValue = ref<number>()
const numberValue = ref<number>()
</script>

<style scoped lang="scss">

</style>