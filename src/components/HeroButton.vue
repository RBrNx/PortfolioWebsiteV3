<template>
  <div class="heroButton" :style="{ 'opacity': opacity }" @click="scrollDown">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "HeroButton",
  props: ["scrollTo"],
  methods: {
    handleScroll() {
      this.opacity = 1 - window.scrollY / 300;
    },
    scrollDown() {
      if (!this.scrollTo) return;
      const topContainer = document.querySelector(this.scrollTo);

      topContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    setTimeout(() => {
      this.opacity = 1;
      window.addEventListener("scroll", this.handleScroll);
    }, 1000);
  },
  data() {
    return {
      opacity: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.heroButton {
  position: absolute;
  width: 24px;
  height: 60px;
  bottom: 5%;
  cursor: pointer;
  transition: opacity 1s;

  @include tablet {
    bottom: 5%;
  }

  @include desktop {
    bottom: 10%;
  }

  .chevron {
    position: absolute;
    width: 20px;
    height: 6px;
    opacity: 0;
    animation: move 6s ease-out infinite;

    &:first-child {
      animation: move 6s ease-out 2s infinite;
    }

    &:nth-child(2) {
      animation: move 6s ease-out 4s infinite;
    }

    &:before,
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
      background: #fff;
    }

    &:before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    &:after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
}
</style>

