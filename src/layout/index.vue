<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_sider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部菜单 -->
    <div class="layout_tabbar">234</div>
    <!-- 内容区域 -->
    <div class="layout_main">
      <div style="height: 1000px; background-color: cadetblue"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useUserStore from '@/stores/modules/user'
  import Logo from './logo/index.vue'
  import Menu from './menu/index.vue'

  const userStore = useUserStore()
</script>

<style scoped lang="scss">
  .layout_container {
    width: 100%;
    height: 100vh;

    .layout_sider {
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;

      .scrollbar {
        width: 100%;
        height: calc(100vh - $base-menu-logo-height);

        .el-menu {
          border-right: none;
        }
      }
    }

    .layout_tabbar {
      position: fixed;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      background: purple;
      top: 0px;
      left: $base-menu-width;
    }

    .layout_main {
      position: absolute;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      background: pink;
      left: $base-menu-width;
      top: $base-tabbar-height;
      padding: 20px;
      overflow: auto;
    }
  }
</style>
