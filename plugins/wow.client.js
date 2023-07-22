import WOW from "wow.js";

export default defineNuxtPlugin(() => {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
  });
  wow.init();
});
