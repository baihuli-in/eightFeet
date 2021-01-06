<template>
  <div class="statistics_main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>统计</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div id="main" style="width:100%;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期天',
          ],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [50, 100, 0, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                    //数值样式
                    color: 'black',
                    fontSize: 10,
                  },
                },
              },
            },
          },
        ],
      },
    }
  },
  //此时页面上的元素已经被渲染完毕了
  mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    const result = this.option
    myChart.setOption(result)
  },
  methods: {},
}
</script>

<style>
.el-breadcrumb {
  padding: 20px;
}
</style>