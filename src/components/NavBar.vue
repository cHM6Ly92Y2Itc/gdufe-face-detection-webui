<template>
  <div>
    <el-menu class="bar" router="true" default-active="detection" mode="horizontal" @click.stop>
      <el-sub-menu>
        <template #title>
          <el-menu-item :index="{ name: 'detection' }"> 人脸识别</el-menu-item>
        </template>
        <el-menu-item>
          <span
            >{{
              detectionStatus ? '关闭' : '开启'
            }}人脸识别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <el-switch v-model="detectionStatus" @change="setDetection"></el-switch>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="{ name: 'facelist' }"> 已识别人脸 </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const detectionStatus = ref(true)
onMounted(() => {
  axios.get('http://127.0.0.1:5000/detection_status').then((response) => {
    detectionStatus.value = response.data['enable']
  })
})
const setDetection = () => {
  axios
    .post('http://127.0.0.1:5000/command/detection_control', { enable: detectionStatus.value })
    .then((response) => {
      detectionStatus.value = response.data['enable']
    })
}
</script>

<style>
.bar {
  /* width: 1370px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
</style>
