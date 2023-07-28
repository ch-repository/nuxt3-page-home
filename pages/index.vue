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
          <h1
            class="px-6 md:px-16 mb-6 md:mb-8 text-2xl md:text-3xl lg:text-5xl"
          >
            姚超航 - Welcome to My Personal Page
          </h1>
          <h2
            class="px-6 md:px-16 text-sm md:text-base wow animate__fadeInRight"
          >
            我是一名前端开发工程师 - Frontend
            Developer，探索创新，用代码绘制未来。Experienced in the frontend
            realm with 3 years of coding adventures.
            欢迎来到我的个人主页，一起探索前端的奇妙世界！
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
        id="about"
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
      id="work"
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
          id="project"
          class="mt-12 md:mt-24 mb-6 md:mb-6 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
        >
          <span class="relative project">PROJECT</span>
        </h2>

        <p
          class="leading-6 md:indent-7 wow animate__fadeIn text-center mb-2 md:mb-6"
        >
          Explore Some of My Core Projects - 探索部分核心项目，
        </p>

        <p class="leading-6 md:indent-7 wow animate__fadeIn text-center">
          Innovative Solutions, Transformed Experiences -
          创新解决方案，改变体验， Due to limited space, below is a selection of
          some core projects that showcase my expertise and passion for creating
          exceptional digital experiences. Feel free to explore and learn more
          about my work!
        </p>

        <p
          class="leading-6 md:indent-7 wow animate__fadeIn text-center mb-2 md:mb-6"
        >
          由于空间有限，以下只列出了部分核心项目，它们展示了我对创造卓越数字体验的专业知识和热情。欢迎探索并了解更多我的作品！
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
              class="w-20 h-20 bg-blue-700 rounded-full mx-auto my-8 flex justify-center items-center"
            >
              <i :class="`iconfont ${item.icon} text-white text-3xl`"></i>
            </div>
            <h4
              class="w-full text-xl font-bold mb-4 hover:text-blue-700 duration-300"
            >
              {{ item.name }}
            </h4>
            <p class="leading-6 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 名言名句 -->
    <div
      id="wisdom"
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
        id="education"
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

              <p class="text-center font-bold text-blue-500 md:text-left">
                2018.9 - 2021.6 （信息工程系）
              </p>

              <p class="mb-6 text-gray-500 sm:text-lg mt-6 leading-6">
                主修课程：HTML5、CSS3、JavaScript、Jquery、Photoshop、C
                语言、PHP、Python、计算机网络、计算机应用、Mysql
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

    <!-- 联系我 -->
    <div class="w-full md:w-10/12 mx-auto px-6">
      <h2
        id="contact"
        class="mt-12 md:mt-24 mb-6 text-center text-4xl text-slate-600 font-bold wow animate__fadeIn"
      >
        <span class="relative contact">CONTACT ME</span>
      </h2>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16 wow animate__fadeInUp">
            <h2
              class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
            >
              个人邮箱
            </h2>

            <p
              class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
            >
              通过下列表单可以直接向作者发送邮件
            </p>
          </div>

          <form
            class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 wow animate__fadeInUp"
          >
            <div class="sm:col-span-2">
              <label
                for="name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >用户名*</label
              >
              <input
                v-model="emailForm.name"
                name="name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >邮箱*</label
              >
              <input
                v-model="emailForm.email"
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >内容*</label
              >
              <textarea
                v-model="emailForm.message"
                name="message"
                class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                class="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base"
                @click="sendEmail"
              >
                <i
                  id="send-email-loading"
                  class="inline-block hidden iconfont icon-loading btn-loading"
                ></i>
                发送
              </button>
            </div>

            <p class="text-xs text-gray-400">
              想要学习前端相关技术也可以放我作者个人博客
              <a
                href="https://www.chaohangweb.cn"
                target="_blank"
                class="underline transition duration-100 hover:text-blue-500 active:text-blue-600"
                >像素脉动</a
              >.
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="pt-4 bg-slate-900">
      <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div
          class="flex flex-col items-center justify-between gap-4 border-t border-b md:flex-row"
        >
          <nav
            class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6"
          >
            <a
              href="https://www.chaohangweb.cn"
              target="_black"
              class="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600"
              >像素脉动（Blog）</a
            >
          </nav>

          <div class="flex gap-4">
            <a
              href="https://github.com/Yao-Chaohang"
              target="_blank"
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="pt-2 text-center text-sm text-gray-400">
          © 2023 - Present 姚超航. All rights reserved.
        </div>
        <div class="py-2 text-center text-sm text-gray-400">
          <a href="https://beian.miit.gov.cn/" target="_blank"
            >冀ICP备2023017514号</a
          >
        </div>
      </footer>
    </div>

    <div
      id="notificationContainer"
      class="fixed top-24 left-[50%] translate-x-[-50%] text-white py-2 px-4 rounded hidden z-50"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { Pagination } from "swiper/modules";
import { sendEmailFetch } from "~/utils/api";

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
    name: "FoodsUp",
    description:
      "FoodsUp chain consider “leading restaurants to be an Eco-friendly industry” as mission, providing high quality food container made by degradable, recyclable material such as sugarcane, kraft and shell.",
  },
  {
    icon: "icon-bangong",
    name: "**有娱科技有限公司OA办公平台",
    description:
      "一款针对某某公司的办公业务搭建的线上OA办公系统，提升了公司内部整体的办公效率",
  },
  {
    icon: "icon-xinjianhuiyi",
    name: "多场景视频会议评审系统",
    description:
      "疫情期间专家及汇报员等人员不方便进行线下开展会议而研发的这款系统。它有着丰富的业务功能以及多种类型的会议室可供用户选择",
  },
  {
    icon: "icon-kapian",
    name: "*市社保卡管理平台",
    description:
      "平台针对某市的社保卡业务需求进行研发，可以使各个网点的工作人员针对用户的社保卡需求进行维护，比如用户需要办理社保卡、忘记了密码、想要社保卡转移等等，都可以通过这个平台去进行办理",
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
    avatar: "/mike.png",
    author: "Carig Zerouni",
    famousSaying: "如果你发现特殊情况太多，那你肯定是用错方法了。",
  },
  {
    avatar: "/adam.jpg",
    author: "Edsger Dijkstra",
    famousSaying: "测试只能证明程序有错误，而不能证明程序没有错误。",
  },
  {
    avatar: "/ben.png",
    author: "Walt Weir",
    famousSaying: "如果我们没能力修好它，我们就会告诉你它根本没坏。",
  },
];

const emailForm = ref({
  name: "",
  email: "",
  message: "",
});

const hint = ref("");

function smoothScrollTo(offset) {
  // 定义每一帧的滚动距离和总帧数
  const scrollStep = offset / 15;
  let currentStep = 0;

  // 使用requestAnimationFrame实现平滑滚动
  function step() {
    currentStep++;
    window.scrollBy(0, scrollStep);

    // 判断是否达到目标位置
    if (currentStep < 15) {
      requestAnimationFrame(step);
    }
  }

  // 开始滚动
  requestAnimationFrame(step);
}

function navbarClick() {
  // 获取导航栏元素
  const navbar = document.getElementById("navbar");

  // 监听导航菜单项点击事件，触发平滑滚动
  navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault(); // 阻止默认的锚点跳转行为
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // 获取目标元素相对于视口顶部的位置
      let offset = targetElement.getBoundingClientRect().top;

      if (targetId === "#home-name") {
        offset = 0;
      }

      // 滚动到目标位置
      smoothScrollTo(offset);
    }
  });
}

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function setNav() {
  const navbar = document.getElementById("navbar");
  const menuItems = Array.from(navbar.getElementsByTagName("li"));

  let closestMenuItem = null;
  let closestDistance = Number.MAX_SAFE_INTEGER;

  menuItems.forEach((item) => {
    const targetId = item
      .getElementsByTagName("a")[0]
      .href.replace("#", "")
      .replace(`${window.location.origin}/`, "");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const distance = Math.abs(targetSection.getBoundingClientRect().top);
      if (distance < closestDistance) {
        closestMenuItem = item;
        closestDistance = distance;
      }
    }
  });

  menuItems.forEach((item) => {
    if (item === closestMenuItem) {
      item.classList.add("text-blue-500");
    } else {
      item.classList.remove("text-blue-500");
    }
  });
}

onMounted(() => {
  if (process.client) {
    navbarClick();
    setNav();
    const setNavHandle = debounce(setNav, 200);
    window.addEventListener("scroll", setNavHandle);
  }
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

function reset() {
  emailForm.value = {
    name: "",
    email: "",
    message: "",
  };
}

function verify(type, value, message, format = "") {
  if (type === "required") {
    if (!value) {
      return message;
    }
  }

  if (format === "email") {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
      return "请输入正确的邮箱";
    }
  }
}

function notification(type, message) {
  const notification = document.getElementById("notificationContainer");
  notification.classList.remove("hidden");
  notification.classList.add("animate-fadeInOut");

  if (type === "success") {
    notification.classList.add("bg-green-500");
  }

  if (type === "error") {
    notification.classList.add("bg-red-500");
  }

  hint.value = message;

  setTimeout(function () {
    if (type === "success") {
      notification.classList.remove("bg-green-500");
    }

    if (type === "error") {
      notification.classList.remove("bg-red-500");
    }
    notification.classList.remove("animate-fadeInOut");
    notification.classList.add("hidden");
  }, 1500);
}

function toggleButtonLoading(type, id) {
  const dom = document.getElementById(id);
  if (dom) {
    if (type === "add") {
      dom.style.display = "inline-block";
    }

    if (type === "remove") {
      dom.style.display = "none";
    }
  }
}

function sendEmail(event) {
  event.preventDefault();
  const { name, email, message } = emailForm.value;
  const verifyName = verify("required", name, "请输入姓名");
  const verifyEmail = verify("required", email, "请输入邮箱", "email");
  const verifyMessage = verify("required", message, "请输入详细内容");

  if (verifyName) {
    notification("error", verifyName);
  } else if (verifyEmail) {
    notification("error", verifyEmail);
  } else if (verifyMessage) {
    notification("error", verifyMessage);
  } else {
    toggleButtonLoading("add", "send-email-loading");
    sendEmailFetch({ name, email, message })
      .then((res) => {
        const message = res.data.value.message || "发送成功";
        const status = res.data.value.status || "failure";
        if (status === "success") {
          reset();
          notification("success", message);
        } else if (status === "failure") {
          notification("error", message);
        } else {
          notification("error", "服务器出现问题！");
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.vue:746 ~ sendEmail ~ err:", err);
      })
      .finally(() => {
        toggleButtonLoading("remove", "send-email-loading");
      });
  }
}

onUnmounted(() => {
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

  .contact::before {
    content: "CONTACT ME";
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

  .btn-loading {
    animation: loading-keyframes 1s linear infinite;
  }

  @keyframes loading-keyframes {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  :deep(.swiper-pagination) {
    margin-bottom: -8px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background-color: rgb(59 130 246 / 1);
  }
}
</style>
