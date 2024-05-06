<template>
  <div class="list">
    <face-card
      v-for="f in faces"
      :key="f.id"
      :name="f.name"
      :img="f.img"
      :id="f.id"
      @update="update"
      @remove="update"
    >
    </face-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FaceCard from '@/components/FaceCard.vue'
const faces = ref(null)
const getData = () => {
  axios.get('http://127.0.0.1:5000/faces_description').then((response) => {
    faces.value = response.data
  })
}
const update = (data) => {
  axios.post('http://127.0.0.1:5000/update', data).then((response) => {
    if (response.data['success']) {
      getData()
    } else {
      alert(data['action'] + 'name failed')
    }
  })
}
onMounted(() => getData())
</script>

<style>
.face-card {
  border: 10px;
  margin: 10px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
