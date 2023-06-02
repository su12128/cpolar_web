<template>
  <el-selsct>
    
  </el-selsct>
</template>

<script>
import {useI18n} from "vue-i18n";
import {ref,reactive} from 'vue'
import languge_list from '@/lang'
export default {
    props:{language},
    setup:()=>{
        const {t,locale} = useI18n()
    }
}
</script>

<style>

</style>