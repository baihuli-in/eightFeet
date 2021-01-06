<template>
  <div class="home">
    <!-- 顶栏容器 -->
    <div class="home_header">
      <!-- logo -->
      <el-row>
        <el-col :span="4">
          <div class="home_icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianpu" />
            </svg>
            <div style="  color: white;">八尺定制</div>
          </div>
        </el-col>
      </el-row>
      <!-- 搜索框 -->
      <el-row>
        <el-col :span="22" class="center">
          <el-input
            v-model="search"
            @focus="focus"
            @blur="blur"
            @keyup.enter.native="searchHandler"
            placeholder="搜索订单"
            prefix-icon="el-icon-search"
          >
            <el-button slot="append" icon="el-icon-search" id="search" @click="searchHandler"></el-button>
          </el-input>
          <!---设置z-index优先级,防止被走马灯效果遮挡-->
          <el-card
            @mouseenter="enterSearchBoxHanlder"
            v-if="isSearch"
            class="box-card"
            id="search-box"
            style="position:absolute;z-index:15"
          >
            <dl v-if="isHistorySearch">
              <dt class="search-title" v-show="history">历史搜索</dt>
              <dt class="remove-history" v-show="history" @click="removeAllHistory">
                <i class="el-icon-delete"></i>清空历史记录
              </dt>
              <el-tag
                v-for="search in historySearchList"
                :key="search.id"
                closable
                :type="search.type"
                @close="closeHandler(search)"
                style="margin-right:5px; margin-bottom:5px;"
              >{{search.name}}</el-tag>
              <dt class="search-title">热门搜索</dt>
              <dd v-for="search in hotSearchList" :key="search.id">{{search}}</dd>
            </dl>
            <dl v-if="isSearchList">
              <dd v-for="search in searchList" :key="search.id">{{search}}</dd>
            </dl>
          </el-card>
        </el-col>
      </el-row>
      <!-- 轮播图 -->
      <el-row>
        <el-col :span="23">
          <div class="home_imgs">
            <el-carousel height="150px">
              <el-carousel-item v-for="(img,idx) in imgs" :key="idx">
                <el-image :src="img.src"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 主要区域 -->
    <div class="home_main">
      <div class="home_order" @click="Completed">
        <a>已经完成</a>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yiwanchengdingdan" />
        </svg>
      </div>
      <div class="home_two">
        <div class="home_camp" @click="Camp">
          <a>待接任务</a>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-daijiedan" />
          </svg>
        </div>
        <div class="home_system" @click="System">
          <a>系统订单</a>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xitong" />
          </svg>
        </div>
      </div>
      <div class="home_my" @click="User">
        <a>我的订单</a>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wodedingdan" />
        </svg>
      </div>
      <div class="home_census" @click="Statistics">
        <a>统计</a>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tongji" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import RandomUtil from '../../utils/randomUtil'
import Store from '../../utils/store'
export default {
  data() {
    return {
      search: '', //当前输入框的值
      isFocus: false, //是否聚焦
      hotSearchList: ['暂无热门搜索'], //热门搜索数据
      historySearchList: [], //历史搜索数据
      searchList: ['暂无数据'], //搜索返回数据,
      history: false,
      types: ['', 'success', 'info', 'warning', 'danger'], //搜索历史tag式样
      imgs: [
        {
          url: '#abc',
          src:
            'http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png',
        },
        {
          url: '#bsbsb',
          src:
            'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        },
        {
          url: '#sjfkajfj',
          src:
            'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        },
        {
          url: '#sjfkajfja',
          src:
            'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        },
      ],
    }
  },
  methods: {
    focus() {
      this.isFocus = true
      this.historySearchList =
        Store.loadHistory() == null ? [] : Store.loadHistory()
      this.history = this.historySearchList.length == 0 ? false : true
    },
    blur() {
      var self = this
      this.searchBoxTimeout = setTimeout(function () {
        self.isFocus = false
      }, 300)
    },
    enterSearchBoxHanlder() {
      clearTimeout(this.searchBoxTimeout)
    },
    searchHandler() {
      //随机生成搜索历史tag式样
      let n = RandomUtil.getRandomNumber(0, 5)
      let exist =
        this.historySearchList.filter((value) => {
          return value.name == this.search
        }).length == 0
          ? false
          : true
      if (!exist) {
        this.historySearchList.push({ name: this.search, type: this.types[n] })
        Store.saveHistory(this.historySearchList)
      }
      this.history = this.historySearchList.length == 0 ? false : true
    },
    closeHandler(search) {
      this.historySearchList.splice(this.historySearchList.indexOf(search), 1)
      Store.saveHistory(this.historySearchList)
      clearTimeout(this.searchBoxTimeout)
      if (this.historySearchList.length == 0) {
        this.history = false
      }
    },
    removeAllHistory() {
      Store.removeAllHistory()
    },
    // 跳转已完成订单页面
    Completed() {
      this.$router.push('/completed')
    },
    // 跳转待接订单页面
    Camp() {
      this.$router.push('/camp')
    },
    // 跳转系统订单页面
    System() {
      this.$router.push('/system')
    },
    // 跳转我的订单页面
    User() {
      this.$router.push('/user2')
    },
    // 跳转统计订单页面
    Statistics() {
      this.$router.push('/statistics')
    },
  },
  computed: {
    isHistorySearch() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    },
    isSearch() {
      return this.isFocus
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  background: #f9fafc;
  height: 100%;
}
.home_header {
  background: #f7c936;
  position: relative;
  width: 100%;
  height: 230px;
}
.home_icon {
  margin: 5px 15px;
  width: 80px;
  font-size: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center {
  margin-left: 15px;
}
#search {
  background-color: #ffc300;
  border-radius: 0%;
}
.search-title {
  color: #bdbaba;
  font-size: 15px;
  margin-bottom: 5px;
}
.remove-history {
  color: #bdbaba;
  font-size: 15px;
  float: right;
  margin-top: -22px;
}
#search-box {
  width: 290px;
  height: 200px;
  margin-top: 0px;
  padding-bottom: 20px;
}
.home_imgs {
  margin-left: 15px;
  position: relative;
  z-index: 0;
  margin-top: 6px;
}
.home_main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home_order,
.home_camp,
.home_system,
.home_my,
.home_census {
  font-weight: bold;
  background: #ffffff;
}
.home_camp,
.home_system,
.home_my,
.home_census {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.home_order {
  width: 40%;
  height: 150px;
  margin: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.home_two {
  width: 40%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 15px;
}
.home_camp {
  width: 100%;
  height: 70px;
}
.home_system {
  width: 100%;
  height: 70px;
}
.home_my {
  width: 40%;
  height: 70px;
  margin: 5px 15px;
}
.home_census {
  width: 40%;
  height: 70px;
  margin: 5px 15px;
}
.el-footer {
  background: #1e1e1e;
}
</style>