<template>
  <div>
    <div class="ph-header">
      <h1>Pinyin Helper 🐱</h1>
    </div>
    <div class="ph-main">
      <div class="ph-main-left">
        <el-input
          type="textarea"
          clearable
          :autosize="{ minRows: 8 }"
          placeholder="Input chinese here"
          v-model="inputValue">
        </el-input>
        <span v-if="inputValue" class="ph-clear-btn" @click="inputValue = ''">
          <i class="el-icon-circle-close"></i>
        </span>
      </div>
      <div class="ph-main-right">
        <py-preview :inputValue="results"></py-preview>
      </div>
    </div>

    <div class="ph-history" v-if="!inputValue">
      <div class="ph-history-header">
        <span>
          <i class="el-icon-alarm-clock"></i>
          History
        </span>
        <span class="ph-history-action" @click="clearHistory">Clear</span>
      </div>
      <div class="ph-history-tags">
        <el-tag 
          v-for="(item, index) in history" 
          :key="index" 
          type="info" 
          closable 
          @close="handleCloseTag(index)"
          @click="handleClickTag(item)">
          {{ item }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import PinyinPreview from './PinyinPreview'
import { debounceTime, map } from 'rxjs/operators'
import config from '../utils/config'

export default {
  name: 'PinyinHelper',

  components: {
    'py-preview': PinyinPreview
  },
  props: {
    msg: String
  },
  data() {
    return {
      inputValue: '',
      history: Array
    }
  },
  methods: {
    getHistory() {
      // return JSON.parse(localStorage.getItem('ph_history')) || []
      return config.get('history')
    },
    clearHistory() {
      // localStorage.removeItem('ph_history')
      config.remove('history')
      this.refreshHistory()
    },
    refreshHistory() {
      this.history = this.getHistory()
    },
    handleCloseTag(index) {
      this.history.splice(index, 1)
      // localStorage.setItem('ph_history', JSON.stringify(this.history))
      config.set('history', this.history)
    },
    handleClickTag(item) {
      this.inputValue = item
    }
  },
  subscriptions() {
    return {
      results: this.$watchAsObservable('inputValue').pipe(
        debounceTime(800),
        map(res => res.newValue),
      )
    }
  },
  watch: {
    inputValue(newValue) {
      if (!newValue) {
        this.refreshHistory()
      }
    }
  },
  mounted() {
    this.refreshHistory()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ph-main {
  display: flex;
}

.ph-main-left {
  position: relative;
  flex-basis: 49%;
}

.ph-main-left .ph-clear-btn {
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: #999;
}

.ph-main-right {
  flex: 1 0;
  margin-left: 8px;
}

.ph-history {
  width: 46.5%;
  margin-top: 10px;
  padding: 16px;
  background-color: #e7e7e7;
  border-radius: 4px;
}

.ph-history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-size: 14px;
  color: #999;
}

.ph-history-action {
  cursor: pointer;
}

.ph-history-tags {
  display: flex;
  flex-wrap: wrap;
}

.ph-history-tags .el-tag {
  margin: 0 8px 8px 0;
  cursor: pointer;
}
</style>
