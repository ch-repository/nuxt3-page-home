<template>
  <div class="header fixed w-screen h-16 z-50 text-white opacity-70 animate__animated">
    <div class="text-sm md:text-lg w-max h-full mx-auto">
      <ul class="h-full flex items-center gap-x-7">
        <li>首页</li>
        <li>关于</li>
        <li>联系我</li>
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
