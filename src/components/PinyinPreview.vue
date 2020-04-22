<template>
  <div class="ph-preview">
    <div class="ph-preview-content">
      <template v-if="isCompare">
        <span class="compare-value" v-for="(item, index) in parsedValue" :key="index">
          <em>{{ item[0] }}</em>
          <span>{{ inputValue[index] }}</span>
        </span>
      </template>
      <template v-else>
        <span class="normal-value" v-for="(item, index) in parsedValue" :key="index">{{ item[0] }}</span>
      </template>
    </div>
    <div class="ph-preview-footer">
      <div class="ph-preview-actions">
        <el-tooltip class="ph-preview-action" content="copy" placement="top">
          <i class="el-icon-document-copy" @click="copy"></i>
        </el-tooltip>
      </div>
      <div class="ph-preview-actions">
        <span class="ph-preview-switch">
          Compare
          <el-switch style="margin-left: 4px" v-model="isCompare" active-color="#13ce66"></el-switch>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import * as pinyin from 'pinyin'
import { copy } from '../utils/other'
import config from '../utils/config'

export default {
  name: "PinyinPreview",
  props: {
    inputValue: String
  },
  data() {
    return {
      parsedValue: [],
      isCompare: false
    }
  },
  methods: {
    copy() {
      copy(this.parsedValue.join(' ')).then(() => {
        this.$message({
          message: 'Copy Success!',
          type: 'success'
        })
      });
    },
    saveHistory(newValue) {
      if (typeof newValue !== 'string') {
        return
      }
      // const history = JSON.parse(localStorage.getItem('ph_history')) || []
      const history = config.get('history') || []
      if (history.indexOf(newValue) === -1) {
        history.push(newValue)
        // localStorage.setItem('ph_history', JSON.stringify(history))
        config.set('history', history)
      }
    }
  },
  watch: {
    inputValue(newValue) {
      this.parsedValue = pinyin(newValue)
      if (this.parsedValue.length) {
        this.saveHistory(newValue)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ph-preview {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.ph-preview-content {
  flex: 1 0;
}

.ph-preview-footer {
  display: flex;
  justify-content: space-between;
  padding: 8px 4px 0;
}

.ph-preview-actions i {
  cursor: pointer;
  font-size: 18px;
}

.ph-preview-actions > .ph-preview-switch {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
}

.normal-value {
  margin-right: 4px;
}

.compare-value {
  display: inline-flex;
  flex-direction: column;
  margin-right: 4px;
}

.compare-value em {
  color: #999;
  font-size: 12px;
}
</style>
