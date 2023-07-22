<template>
  <div id="home" class="overflow-x-hidden" style="height: 2200px">
    <Header />
    <div id="home-bg" class="relative w-screen h-screen home-bg bg-cover">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative w-full h-full z-10 flex justify-center items-center">
        <div
          class="w-max h-max text-white text-center tracking-normal md:tracking-widest"
        >
          <h2
            class="mb-6 md:mb-12 text-2xl md:text-4xl wow animate__fadeInLeft"
          >
            你好~ 欢迎来到我的个人主页
          </h2>
          <h1 class="mb-6 md:mb-12 text-2xl md:text-5xl wow animate__flip">
            <span>我是一名</span>
            <span id="typewriter-title">前端开发工程师</span>
          </h1>
          <h2 class="text-sm md:text-2xl wow animate__fadeInRight">
            前端开发是我的强项，当然，我也会后端、服务端等互联网相关技术
          </h2>
        </div>
        <i
          class="iconfont icon-chakangengduo-xian text-2xl text-white absolute bottom-12 left-2/4 -translate-y-2/4 cursor-pointer down-arrow"
          @click.stop="downArrow"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

let typewriterInterval = null;

onMounted(() => {
  parallaxEffect();
  // typeWriter();
});

function downArrow() {
  const scrollHeight = window.scrollY;
  const windowHeight = window.innerHeight;
  const targetPosition = windowHeight - scrollHeight;

  window.scrollBy({
    top: targetPosition,
    behavior: "smooth",
  });
}

function parallaxEffect() {
  const homeBg = document.getElementById("home-bg");
  window.addEventListener("scroll", () => {
    const scrollDistance = window.scrollY;
    homeBg.style.backgroundPositionY = -scrollDistance * 0.5 + "px";
  });
}

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter-title");
  const fullText = "前端开发工程师";
  let textIndex = 0;
  typewriterInterval = setInterval(() => {
    typewriterElement.textContent = fullText.slice(0, textIndex + 1);
    textIndex++;

    if (textIndex === fullText.length) {
      typewriterElement.textContent = "";
      textIndex = 0;
    }
  }, 300);
}

onUnmounted(() => {
  clearInterval(typewriterInterval);
  window.removeEventListener("scroll");
});
</script>

<style lang="scss" scoped>
#home {
  .home-bg {
    background-image: url("~/assets/images/home-bg.jpg");
  }

  .down-arrow {
    animation: floatUpDown 2s infinite;
  }

  @keyframes floatUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}
</style>
