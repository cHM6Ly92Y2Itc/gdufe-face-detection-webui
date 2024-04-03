<template>
  <div class="Player">
    <el-image class="frame" src="http://127.0.0.1:5000/video_feed" />
  </div>
</template>

<style>
.Player {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  border-color: black;
  border-width: 15px;
}
.frame {
  width: 1280px;
  height: 960px;
  object-fit: cover;
}
</style>
