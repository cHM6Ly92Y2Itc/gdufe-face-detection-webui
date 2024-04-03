<template>
  <el-card style="max-height: 400px">
    <template #header>
      <div class="head">
        <span v-if="!ifEdit" style="font-size: large">{{ name }}</span>
        <el-input v-if="ifEdit" v-model="newName" style="width: 190px" />
      </div>
    </template>
    <div class="imgs">
      <el-image class="cardimg" v-if="showImg" :src="img" style="object-fit: cover" />
      <el-image class="cardimg" v-if="!showImg" :src="defaultImg" style="object-fit: cover" />
    </div>
    <template #footer>
      <div class="foot">
        <el-button type="primary" @click="show">{{ showImg ? '隐藏' : '显示' }}图片</el-button>
        <el-button v-if="!ifEdit" type="primary" @click="edit">修改</el-button>
        <el-button v-if="ifEdit" type="primary" @click="update">确定</el-button>
        <el-button type="primary" @click="remove">删除</el-button>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import defaultImg from '@/assets/placeholder.jpg'

const emit = defineEmits(['inFocus', 'submit'])
const ifEdit = ref(false)
const showImg = ref(false)
const newName = ref('')

const props = defineProps({
  name: String,
  img: String,
  id: String
})

const remove = () => {
  emit('remove', emitData('remove'))
}

const emitData = (action) => {
  return { action: action, name: newName.value, id: props.id }
}

const show = () => {
  showImg.value = !showImg.value
}
const edit = () => {
  newName.value = props.name
  changeEditStatus()
}
const update = () => {
  emit('update', emitData('update'))
  changeEditStatus()
}
const changeEditStatus = () => {
  ifEdit.value = !ifEdit.value
}
</script>

<style>
.el-button {
  float: left;
}
.el-card {
  float: left;
}
.imgs {
  min-width: 200px;
  min-height: 200px;
  padding: 0px;
}
.cardimg {
  width: 200px;
  height: 200px;
}
.head {
  height: 32px;
  max-width: 190px;
}
.foot {
  display: flex;
  justify-content: center;
}
</style>
