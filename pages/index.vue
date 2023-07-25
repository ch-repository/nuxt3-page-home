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
            <div
              v-for="(item, idx) in skill"
              :key="idx"
              class="mt-6 wow animate__fadeInRight"
              :data-wow-delay="`${idx * 0.1}S`"
            >
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
      class="w-screen bg-[url('~/assets/images/experience.jpg')] bg-cover bg-fixed h-[180px] md:h-[260px] mt-12 md:mt-28"
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

        <div class="w-fit wow animate__fadeInUp" data-wow-delay="0.8s">
          <div class="text-2xl lg:text-6xl">
            <i class="iconfont icon-gongzuojingyan text-2xl lg:text-6xl"></i>
            <span> 3</span>
          </div>
          <div class="text-xl lg:text-3xl mt-2">工作经验</div>
        </div>

        <div class="w-fit wow animate__fadeInUp" data-wow-delay="1.1s">
          <div class="text-2xl lg:text-6xl">
            <i class="iconfont icon-code text-2xl lg:text-6xl"></i>
            <span> 1000000+</span>
          </div>
          <div class="text-xl lg:text-3xl mt-2">代码行数</div>
        </div>
      </div>
    </div>

    <!-- 项目经验 -->
    <div class="bg-gray-50 py-12">
      <div class="w-full md:w-10/12 mx-auto px-6">
        <h2
          class="mt-12 md:mt-24 mb-6 md:mb-6 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
        >
          <span class="relative project">PROJECT</span>
        </h2>

        <p
          class="leading-6 md:indent-7 wow animate__fadeIn text-center mb-2 md:mb-6"
        >
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>

        <div class="flex flex-wrap justify-between">
          <!-- 卡片 -->
          <div
            v-for="(item, idx) in projectList"
            :key="idx"
            class="w-full md:w-[23%] min-w-[260px] mt-8 lg:mt-0 p-6 rounded-md shadow-lg text-center wow animate__fadeInUp cursor-pointer hover:shadow-xl duration-300"
            :data-wow-delay="`${idx * 0.1}S`"
          >
            <div
              class="w-20 h-20 bg-amber-700 rounded-full mx-auto my-8 flex justify-center items-center"
            >
              <i :class="`iconfont ${item.icon} text-white text-3xl`"></i>
            </div>
            <h4
              class="w-full text-2xl font-bold mb-4 hover:text-amber-700 duration-300"
            >
              {{ item.name }}
            </h4>
            <p class="leading-6">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 名言名句 -->
    <div
      class="w-screen h-[300px] bg-[url('~/assets/images/banner/swiper-bg.jpg')] mt-4 md:mt-6 bg-cover py-16"
    >
      <Swiper
        class="h-full"
        :modules="[Pagination, SwiperAutoplay]"
        :pagination="pagination"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="(item, idx) in swiperBannerList" :key="idx">
          <div>
            <div class="text-white text-center">
              <img
                :src="item.avatar"
                class="w-[72px] h-[72px] rounded-full object-cover mx-auto mb-1"
                alt="头像"
              />
              <h3 class="text-2xl mb-4">{{ item.author }}</h3>
              <p class="iconfont text-sm famous-saying-icon">
                {{ item.famousSaying }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- 教育背景 -->
    <div class="mt-24">
      <h2
        class="mt-12 md:mt-24 mb-6 md:mb-6 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
      >
        <span class="relative educational">EDUCATIONAL</span>
      </h2>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div class="md:pt-8 wow animate__fadeInLeft" data-wow-delay="0.3s">
              <div
                class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto"
              >
                <img
                  src="~/assets/images/school.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-96 w-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8 wow animate__fadeInRight" data-wow-delay="0.8s">
              <h1
                class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left"
              >
                河北建材职业技术学院
              </h1>

              <p class="text-center font-bold text-indigo-500 md:text-left">
                2018.9 - 2021.6 （信息工程系）
              </p>

              <p class="mb-6 text-gray-500 sm:text-lg mt-6 leading-6">
                主修课程：HTML5、CSS3、JavaScript、Jquery、Photoshop、C 语言、PHP、Python、计算机网络、计算机应用、Mysql
              </p>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8 leading-6">
                河北建材职业技术学院（Hebei Polytechnic of Building
                Materials）位于河北省秦皇岛市，是经河北省人民政府批准、中华人民共和国教育部备案的高等职业技术院校，是教育部全国建材教指委副主任单位、河北省建材职业教育集团牵头单位、河北省建材工业协会副会长单位、河北省硅酸盐学会副理事长单位、河北省服务外包培训基地、教育部支援西部教育顾问院校。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 临时占位 -->
    <div class="h-[300px]"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { Pagination } from "swiper/modules";

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

const projectList = [
  {
    icon: "icon-wuliuxiaocheche",
    name: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: "icon-bangong",
    name: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: "icon-xinjianhuiyi",
    name: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: "icon-kapian",
    name: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
];

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className}"></span>`;
  },
};

const swiperBannerList = [
  {
    avatar: "../assets/images/banner/adam.jpg",
    author: "Edsger Dijkstra",
    famousSaying: "测试只能证明程序有错误，而不能证明程序没有错误。",
  },
  {
    avatar: "../assets/images/banner/adam.jpg",
    author: "Edsger Dijkstra",
    famousSaying: "测试只能证明程序有错误，而不能证明程序没有错误。",
  },
  {
    avatar: "../assets/images/banner/adam.jpg",
    author: "Edsger Dijkstra",
    famousSaying: "测试只能证明程序有错误，而不能证明程序没有错误。",
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

  .educational::before {
    content: "EDUCATIONAL";
    position: absolute;
    top: -12px;
    font-size: 48px;
    color: #a5a5a5;
    opacity: 0.2;
    white-space: nowrap;
    transform: translateX(-12%);
    font-weight: bold;
  }

  .famous-saying-icon::before {
    content: "\eb8b";
    font-size: 18px;
    margin-right: 5px;
  }

  .famous-saying-icon::after {
    content: "\eb8a";
    font-size: 18px;
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

  :deep(.swiper-pagination) {
    margin-bottom: -8px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background-color: rgb(180 83 9 / 1);
  }
}
</style>
