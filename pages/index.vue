<template>
  <div id="home" class="overflow-hidden">
    <Header />
    <div
      id="home-bg"
      class="relative w-screen h-screen home-bg bg-cover bg-fixed"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative w-full h-full z-10 flex justify-center items-center">
        <div
          class="w-max h-max text-white text-center tracking-normal md:tracking-widest min-w-400"
        >
          <h1 class="px-6 md:px-16 mb-4 md:mb-6 text-4xl md:text-6xl">
            Laura Thomson
          </h1>
          <h2 class="px-6 md:px-16 text-sm md:text-xl wow animate__fadeInRight">
            I'M A PROFESSIONAL PHOTOGRAPHER IN NEW YORK CITY
          </h2>
        </div>
        <i
          class="iconfont icon-geiwo text-2xl text-white absolute bottom-12 left-2/4 -translate-y-2/4 cursor-pointer down-arrow"
          @click.stop="downArrow"
        ></i>
      </div>
    </div>

    <!-- 关于 -->
    <div class="w-full md:w-10/12 mx-auto px-6">
      <h2
        class="mt-12 md:mt-24 mb-6 md:mb-12 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
      >
        <span class="relative about">ABOUT ME</span>
      </h2>

      <p class="leading-6 md:indent-7 wow animate__fadeIn">
        我是一名专注于前端开发的工程师，拥有计算机信息管理（互联网开发方向）的专业背景。我热衷于构建优质的用户界面和出色的用户体验。在过去的三年里，我一直从事前端开发工程师的工作，并参与了许多令人振奋的项目。
        我以良好的编程习惯和对编程的强烈热情自豪。我一直致力于追求卓越，并且持续学习新技术和工具，以保持在快速发展的技术领域中的竞争力。我对于前端开发的职业生涯非常满意，同时也希望能够涉足服务端和后端的领域，以扩展我的技术广度和深度。
      </p>

      <div class="container lg:flex mt-6 md:mt-8">
        <div class="lg:basis-1/3 md:mr-6 wow animate__fadeInLeft">
          <img
            src="~/assets/images/me.jpg"
            class="w-full aspect-[1/1] lg:aspect-auto object-cover"
            alt="me"
          />
        </div>

        <div class="lg:basis-2/3">
          <ul class="mt-6 lg:grid lg:grid-cols-2 wow animate__fadeInRight">
            <li
              v-for="(item, idx) in meInfos"
              :key="idx"
              class="mb-3 whitespace-nowrap"
            >
              <span class="mr-3 text-[#b45309] font-lg">
                <i class="iconfont icon-youjiantou"></i>
              </span>
              <span class="mr-1 text-[#44403c] text-lg font-bold">{{
                item.label
              }}</span>
              <span class="text-[#57534e] text-base">{{ item.value }}</span>
            </li>
          </ul>

          <div class="mt-6">
            <div v-for="(item, idx) in skill" :key="idx" class="mt-6 wow animate__fadeInRight"  :data-wow-delay="`${idx * 0.1}S`">
              <div class="flex justify-between my-2 text-sm text-[#57534e]">
                <h3>{{ item.name }}</h3>
                <h5>{{ item.progress }}%</h5>
              </div>
              <div class="bg-slate-200 h-2">
                <div :class="`${item.bgColor} ${item.width} h-full`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 工作经验 -->
    <div
      class="w-screen bg-[url('../assets/images/experience.jpg')] bg-cover bg-fixed h-[180px] md:h-[260px] mt-12 md:mt-28"
    >
      <div
        class="w-full h-full md:w-10/12 mx-auto px-6 flex justify-around items-center text-white text-center"
      >
        <div class="w-fit wow animate__fadeInUp" data-wow-delay="0.5s">
          <div class="text-2xl lg:text-6xl">
            <i class="iconfont icon-nianling text-2xl lg:text-6xl"></i>
            <span> 24</span>
          </div>
          <div class="text-xl lg:text-3xl mt-2">年龄</div>
        </div>

        <div class="w-fit wow animate__fadeInUp" data-wow-delay="1s">
          <div class="text-2xl lg:text-6xl">
            <i class="iconfont icon-gongzuojingyan text-2xl lg:text-6xl"></i>
            <span> 3</span>
          </div>
          <div class="text-xl lg:text-3xl mt-2">工作经验</div>
        </div>

        <div class="w-fit wow animate__fadeInUp" data-wow-delay="1.5s">
          <div class="text-2xl lg:text-6xl">
            <i class="iconfont icon-code text-2xl lg:text-6xl"></i>
            <span> 1000000+</span>
          </div>
          <div class="text-xl lg:text-3xl mt-2">代码行数</div>
        </div>
      </div>
    </div>

    <!-- 项目经验 -->
    <div class="w-full md:w-10/12 mx-auto px-6">
      <h2
        class="mt-12 md:mt-24 mb-6 md:mb-12 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
      >
        <span class="relative project">PROJECT</span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const meInfos = [
  {
    label: "姓名：",
    value: "yaochaohang",
  },
  {
    label: "年龄：",
    value: "24",
  },
  {
    label: "博客：",
    value: "www.chaohangweb.cn",
  },
  {
    label: "服务器：",
    value: "华为云",
  },
  {
    label: "手机号：",
    value: "19133965998",
  },
  {
    label: "个人邮箱：",
    value: "yaochaohang219@gmail.com",
  },
  {
    label: "城市：",
    value: "河北",
  },
];

const skill = [
  {
    name: "HTML / CSS3",
    progress: 90,
    width: "w-[90%]",
    bgColor: "bg-[#0891b2]",
  },
  {
    name: "Javascript / ES6",
    progress: 80,
    width: "w-[80%]",
    bgColor: "bg-[#0f766e]",
  },
  {
    name: "TypeScript",
    progress: 75,
    width: "w-[75%]",
    bgColor: "bg-[#16a34a]",
  },
  {
    name: "Vue2 / Vue3",
    progress: 80,
    width: "w-[80%]",
    bgColor: "bg-[#4f46e5]",
  },
  {
    name: "Nuxt2 / Nuxt3",
    progress: 80,
    width: "w-[80%]",
    bgColor: "bg-[#c026d3]",
  },
  {
    name: "React",
    progress: 60,
    width: "w-[60%]",
    bgColor: "bg-[#ca8a04]",
  },
  {
    name: "Ant Design / Element Ul / Echarts / Iview / Bootstrap ...",
    progress: 88,
    width: "w-[88%]",
    bgColor: "bg-[#22d3ee]",
  },
  {
    name: "Less / Scss",
    progress: 83,
    width: "w-[83%]",
    bgColor: "bg-[#f59e0b]",
  },
  {
    name: "uni-app / 微信小程序",
    progress: 60,
    width: "w-[60%]",
    bgColor: "bg-[#c2410c]",
  },
  {
    name: "Linux",
    progress: 50,
    width: "w-[50%]",
    bgColor: "bg-[#dc2626]",
  },
];

onMounted(() => {
  // parallaxEffect();
});

function downArrow() {
  const scrollHeight = window.scrollY;
  const windowHeight = window.innerHeight;
  const targetPosition = windowHeight - scrollHeight;

  window.scrollBy({
    top: targetPosition - 64,
    behavior: "smooth",
  });
}

// 背景图片的滚动视差，有点花里胡哨，暂时废弃
// function parallaxEffect() {
//   const homeBg = document.getElementById("home-bg");
//   window.addEventListener("scroll", () => {
//     const scrollDistance = window.scrollY;
//     homeBg.style.backgroundPositionY = -scrollDistance * 0.5 + "px";
//   });
// }

onUnmounted(() => {
  // window.removeEventListener("scroll");
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

  .about::before {
    content: "ABOUT ME";
    position: absolute;
    top: -12px;
    font-size: 48px;
    color: #a5a5a5;
    opacity: 0.2;
    white-space: nowrap;
    transform: translateX(-12%);
    font-weight: bold;
  }

  .project::before {
    content: "PEOJECT";
    position: absolute;
    top: -12px;
    font-size: 48px;
    color: #a5a5a5;
    opacity: 0.2;
    white-space: nowrap;
    transform: translateX(-12%);
    font-weight: bold;
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
