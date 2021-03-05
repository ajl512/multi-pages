<template>
<div class="wrap">
  <div v-for="(item,index) in dest" v-bind:key="index">
    <el-link class="instance-name" type="primary" icon="el-icon-connection" :href="item.url">{{ item.instance_name }}</el-link>
    <el-table class="table-wrap" @cell-dblclick="cellClick" :data="item.slow_list" border resizable style="width: 100%" stripe size="medium" highlight-current-row sum-text>
      <template v-for="(prop,idx) in headerArr">
        <el-table-column :fixed="idx === 0" :prop="prop" align="center" header-align="center" :label="prop"  :key="`prop-${prop}-${idx}`" show-overflow-tooltip>
      </el-table-column>
      </template>
    </el-table>
  </div>
</div>
</template>

<script>
import { dest } from './dest'
export default {
  data () {
    return {
      dest
    }
  },
  computed: {
    headerArr () {
      return this.getLableConfig()
    }
  },
  methods: {
    getLableConfig () {
      const showList = this.dest[0].slow_list || []
      if (showList.length) {
        return Object.keys(showList[0])
      } else {
        return []
      }
    },

    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      // rowIndex从0开始不包含头部; columnIndex从0开始
      if (columnIndex === 0) { // 用于设置要开始合并的列
        if (rowIndex === 0) { // 用于设置合并开始的行号
          return [100, 1] // 第一个值表示合并的行数 第二个值表示合并的列数，设为0则直接不显示
        } else {
          return [0, 0]
        }
      }
    },

    cellClick (row, column, cell, event) {
      if (column.property === 'sql_text') {
        console.log(row.sql_text)
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.wrap {
  margin: 0 40px 40px;
}
.instance-name{
  margin: 40px 0 20px;
}
.table-wrap {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
