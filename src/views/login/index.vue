<template>
  <div class="login_container">
    <el-row>
      <!-- :xs => 当屏幕宽度小于768时 显示的列数 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form :model="LoginForm" :rules="rules" class="login_form" ref="FormRef">
          <h1>WelCome</h1>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="LoginForm.username">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              v-model="LoginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              @click="login"
              class="login_btn"
              size="default"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { User, Lock } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import useUserStore from '@/stores/modules/user'
  import { useRouter } from 'vue-router'
  import { ElNotification } from 'element-plus'
  import { getTime } from '@/utils/time'

  const LoginForm = ref({
    username: 'admin',
    password: '111111',
  })

  const loading = ref(false)
  const userStore = useUserStore()
  const router = useRouter()
  const FormRef = ref()

  const login = async () => {
    await FormRef.value.validate()
    loading.value = true
    try {
      await userStore.userLogin(LoginForm.value)
      loading.value = false
      router.push('/')
      ElNotification({
        type: 'success',
        message: '欢迎回来',
        title: `Hi,${getTime()}`,
      })
    } catch (error) {
      loading.value = false
      ElNotification({
        type: 'error',
        message: (error as Error).message,
      })
    }
  }

  const rules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
      {
        required: true,
        min: 5,
        max: 10,
        message: '用户名长度在5到10个字符',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
      {
        required: true,
        min: 6,
        max: 12,
        message: '密码长度在6到12个字符',
        trigger: 'blur',
      },
    ],
  }
</script>

<style scoped lang="scss">
  .login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/imgs/wallhaven-gp9keq_3840x1600.png') no-repeat;
    background-size: cover;
    .login_form {
      position: relative;
      width: 80%;
      top: 30vh;
      background: url('@/assets/imgs/Snow-PNG.png') no-repeat;
      background-size: cover;
      padding: 40px;
      h1 {
        color: white;
        font-size: 40px;
        margin-bottom: 2%;
      }
      .login_btn {
        width: 20%;
        margin: 0 auto;
      }
    }
  }
</style>
