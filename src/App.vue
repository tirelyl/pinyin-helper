<template>
  <div class="pinyin-helper-wrapper">
    <py-helper></py-helper>
  </div>
</template>

<script>
import PinyinHelper from "./components/PinyinHelper.vue"

export default {
  name: "App",
  components: {
    'py-helper': PinyinHelper
  },
  data: function() {
    return {
      message: '',
      parsedMessage: ''
    };
  },
};
</script>

<style>
.pinyin-helper-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  width: 1220px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}

.preview-wrapper {
  position: relative;
  width: 163px;
  height: auto;
  margin: auto;
  word-break: break-all;
  text-align: left;
  padding: 16px;
  border: 1px solid #e8e8e8;
  margin-bottom: 4px;
  border-radius: 3px;
}

.input-area {
  width: 191px;
}

.copy-btn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
