<template>
  <div>
    <!-- 头像登录页面 -->
    <div class="user_info_wrap">
      <div class="user_img_wrap" :src="src">
        <img class="user_bg" :src="src" />
        <div class="user_info">
          <img class="user_icon" :src="src" />
          <div class="user_name">{{name}}</div>
        </div>
      </div>
    </div>

    <div class="user_content">
      <div class="user_main">
        <!-- 我的订单 -->
        <div class="orders_wrap">
          <div class="orders_title">订单</div>
          <div class="order_content">
            <div @click="UserOrder">
              <div class="iconfont icon-quanbudingdan"></div>
              <div class="order_name">全部订单</div>
            </div>
            <div>
              <div class="iconfont icon-daifukuan"></div>
              <div class="order_name">订单分配</div>
            </div>
            <div>
              <div class="iconfont icon-daishouhuo"></div>
              <div class="order_name">已完成</div>
            </div>
            <div @click="UserStatistics">
              <div class="iconfont icon-tuikuan"></div>
              <div class="order_name">统计</div>
            </div>
          </div>
        </div>
        <!-- 收货地址管理 -->
        <div class="address_wrap">客户信息</div>
        <!-- 应用信息相关 -->
        <div class="app_info_wrap">
          <div class="app_info_item app_info_contact">
            <div>错误订单</div>
            <div>
              <i class="el-icon-warning"></i>
            </div>
          </div>
          <div class="app_info_item">员工查看</div>
          <div class="app_info_item">
            <!-- <i class="el-icon-setting"></i> -->
            设置权限
          </div>
        </div>
        <!-- 推荐 -->
        <div class="recommend_wrap">把应用推荐给其他人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '八尺',
      src: 'https://i.loli.net/2020/12/10/Fw54pVYzysRZPJg.png',
    }
  },
  methods: {
    UserStatistics() {
      this.$router.push('/statistics')
    },
    UserOrder() {
      this.$router.push('/order')
    },
  },
}
</script>

<style lang="less" scoped>
.user_info_wrap {
  height: 45vh;
  overflow: hidden;
  background-color: red;
  position: relative;
}
.user_info_wrap .user_img_wrap {
  position: relative;
}
.user_info_wrap .user_img_wrap .user_bg {
  height: 80vh;
  filter: blur(5px);
}
.user_info_wrap .user_img_wrap .user_info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  text-align: center;
}
.user_info_wrap .user_img_wrap .user_info .user_icon {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.user_info_wrap .user_img_wrap .user_info .user_name {
  color: red;
  margin-top: 0px;
}

.user_content {
  position: relative;
}
.user_content .user_main {
  padding-bottom: 50px;
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
  font-size: 15px;
}
.user_content .user_main .history_wrap {
  background-color: #fff;
  display: flex;
}
.user_content .user_main .history_wrap div {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}

.user_content .user_main .orders_wrap {
  background-color: #fff;
  margin-top: 5px;
}
.user_content .user_main .orders_wrap .orders_title {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.user_content .user_main .orders_wrap .order_content {
  display: flex;
}
.user_content .user_main .orders_wrap .order_content div {
  padding: 4px 0;
  flex: 1;
  text-align: center;
}
.user_content .user_main .orders_wrap .order_content div .iconfont {
  color: red;
  font-size: 30px;
}
.user_content .user_main .address_wrap {
  margin-top: 0px;
  background: #edece8;
  padding: 10px;
}
.user_content .user_main .app_info_wrap {
  margin-top: 10px;
  background-color: #edece8;
}
.user_content .user_main .app_info_wrap .app_info_item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.user_content .user_main .app_info_wrap .app_info_contact {
  display: flex;
  justify-content: space-between;
}
.user_content .user_main .recommend_wrap {
  margin-top: 10px;
  padding: 10px;
  background-color: #edece8;
}
</style>