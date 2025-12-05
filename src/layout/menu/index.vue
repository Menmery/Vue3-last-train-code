<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>标&nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 子路由个数大于一 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归调用自己 -->
      <LayoutMenu :menuList="item.children"></LayoutMenu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
  import { defineOptions } from 'vue'

  // 定义组件名称，让递归可以正常工作
  defineOptions({
    name: 'LayoutMenu',
  })
  defineProps(['menuList'])
</script>

<style scoped></style>
