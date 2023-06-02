<template>
  <div class="login-box">
    <div class="login-content">
      <div class="input_div">
        <div>{{ $t(`message.username`) }}</div>
        <el-input v-model="user.user_name"></el-input>
      </div>
      <div class="input_div">
        <div>密码</div>
        <el-input v-model="user.user_pwd"></el-input>
      </div>
      <el-button @click="click_login()">{{ $t('message.login') }}</el-button>
      <el-button @click="click_visitor_login()">{{ $t('message.visitor_login') }}</el-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, getCurrentInstance, watch } from "vue";
import i18n from "@/lang/i18n";
import {useI18n} from "vue-i18n";
import { i18nStore } from "../store";

// const { t } = i18n.global;
// import { api } from "../axios/api"
export default {
  setup() {
    const {
        appContext: {
          config: { globalProperties },
        },
      } = getCurrentInstance();
    const {t} = useI18n()
    const user = reactive({
      user_name: "admin",
      user_pwd: "admin",
    });
    

    let click_login = () => {
      console.log("222", user);
    };
    let click_visitor_login = ()=>{
      globalProperties.$api.visitor_login().then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })

    }
    onMounted(() => {
      console.log("on mount");
    });
    watch(() => {});
    return {
      user,
      click_login,
      click_visitor_login,
    };
  },
};
</script>
<style scoped>
.login-box {
  display: flex;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.login-content {
  margin: 10vh 0;
  background-color: red;
  /* width:30vw; */
  height: 30vh;
  min-width: 220px;
  min-height: 200px;
  border-block: #000;
  border-radius: 10px;
  padding: 100px 20px 0 20px;
}
.input_div {
  display: flex;
  text-align: left;
  margin: 15px 0 0 10px;
}
.input_div div:nth-of-type(1) {
  /* flex: 1; */
  width: 10%;
  min-width: 80px;
  display: inline-block;
  /* border: rebeccapurple 2px solid; */
}
.input_div div:nth-of-type(2) {
  /* flex:3; */
  display: inline-block;
  min-width: 220px;
  /* border: rebeccapurple 2px solid; */
}
.el-button {
  margin: 20px 0;
}
</style>
