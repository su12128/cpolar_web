
<template>
  <div class="app-box">
    <Particles
      id="tsparticles"
      class="login-partic"
      :options="options1"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
    />

    <div class="language_select">
      <el-select
        v-model="language"
        @change="i18nStore().change_language(language)"
        placeholder="{{ lang_list }}"
      >
        <el-option
          v-for="item in lang_list"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >{{ item.label }}</el-option
        >
      </el-select>
    </div>
    <router-view />
  </div>
</template>

<style>
.app-box {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.login-partic {
  position: absolute;
}
.language_select {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 10%;
  min-width: 100px;
}
</style>
<script setup>
import { ref, reactive, toRef, toRefs } from "vue";
import { particles } from "./components/particles/particles";
import { i18nStore } from "./store";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

//语言设置
let language_ = i18nStore().language;
const lang_list = i18nStore().lang_list;

const data = reactive({
  language: language_,
  options: particles,
  options1: {
    fpsLimit: 50,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.6,
          size: 10,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#BA55D3",
      },
      links: {
        color: "#FFBBFF",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  },
});
const { options, options1, language } = toRefs(data);
</script>
