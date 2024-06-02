<template>
  <div>测试页面</div>
</template>

<script setup lang="ts">
onLoad(() => {
  // #ifdef MP-ALIPAY
  my.setNavigationBar({
    frontColor: '#000000',
    backgroundColor: '#f8f8f8'
  })
// #endif
})
</script>

<style scoped lang="scss">

</style>