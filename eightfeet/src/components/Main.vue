<template>
  <div class="Main">
    <!--用于渲染当前路由组件-->
    <router-view></router-view>
    <div class="btm_tool">
      <div class="tool_item">
        <div class="iconfont icon-shouye"></div>
        <div>
          <router-link to="/home">首页</router-link>
        </div>
      </div>
      <div class="tool_item">
        <div class="iconfont icon-saoma"></div>
        <div>
          <router-link to="/scan">扫码</router-link>
        </div>
      </div>
      <div class="tool_item">
        <div class="iconfont icon-dingdan"></div>
        <div>
          <router-link to="/order">订单</router-link>
        </div>
      </div>
      <div class="tool_item">
        <div class="iconfont icon-wode"></div>
        <div>
          <router-link to="/user">我的</router-link>
        </div>
        <!-- <button open-type="share"></button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {},
  },
}
</script>

<style>
/* .Main {
} */
.router-link-active {
  text-decoration: none;
  color: red;
}
a {
  text-decoration: none;
}
.btm_tool {
  border-top: 2px solid #f9fafc;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90rpx;
  background-color: #fff;
  display: flex;
}

.btm_tool .tool_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  position: relative;
}

.btm_tool .tool_item button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>