<template>
  <div class="header fixed w-screen h-16 z-50 text-white opacity-70 animate__animated">
    <div class="text-sm md:text-lg w-max h-full mx-auto">
      <ul id="navbar" class="h-full flex items-center text-sm md:text-xl space-x-4 md:space-x-14">
        <li><a href="#home-bg">首页</a></li>
        <li><a href="#about">关于我</a></li>
        <li><a href="#work">工作经验</a></li>
        <li><a href="#project">项目经历</a></li>
        <li><a href="#wisdom">名言名句</a></li>
        <li><a href="#education">教育背景</a></li>
        <li><a href="#contact">联系作者</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  const header = document.getElementsByClassName("header")[0];
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
      header.classList.add("animate__fadeInDown", "bg-slate-900");
      header.classList.remove("animate__fadeIn");
    } else {
      header.classList.add("animate__fadeIn");
      header.classList.remove("animate__fadeInDown", "bg-slate-900");
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll");
});
</script>

<style lang="scss" scoped>
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeInDown {
  --animate-duration: 1.5s;
}
</style>
