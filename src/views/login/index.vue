<template>
  <div class="login-container">
    <!--
      el-form 表单组件
      每个表单项都必须使用 el-form-item 组件包裹
    -->
    <div class="login-form-wrap">
    <div class="login-head">
      <div class="logo"></div>
    </div>
    <el-form :model="user" :rules="rules" ref="ruleForm" class="login-form">
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile"
                  placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code"
                  placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onLogin('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      checked: false, // 是否同意协议的选中状态
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        checked: [
          // {
          //   // 自定义校验规则：https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze
          //   // 验证通过：callback()
          //   // 验证失败：callback(new Error('错误消息'))
          //   validator: (rule, value, callback) => {
          //     if (value) {
          //       callback()
          //     } else {
          //       callback(new Error('请同意用户协议'))
          //     }
          //   },
          //   // message: '请勾选同意用户协议',
          //   trigger: 'change'
          // }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    onLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取表单数据
          const user = this.user
          // 表单验证
          // 验证通过，提交登录
          request({
            method: 'POST',
            url: '/v1_0/authorizations',
            data: user
          }).then(res => {
            // 登录成功
            console.log(res)
          }).catch(err => {
            // 登录失败
            console.log('登录失败', err)
          })
          // 处理后端响应结果
          //  成功：xxx
          //  失败：xxx
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('./login_bg.jpg') no-repeat;
    background-size: cover;
    .login-form-wrap {
      min-width: 300px;
      padding: 30px 50px 10px;
      background-color: #fff;
      .login-head {
        display: flex;
        justify-content: center;
        .logo {
          width: 200px;
          height: 57px;
          background: url('./logo_index.png') no-repeat;
          background-size: contain;
        }
      }
      .login-form {
        .login-btn {
          width: 100%;
        }
      }
    }
  }
</style>
