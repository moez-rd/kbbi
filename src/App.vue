<template>
  <div class="wrapper relative">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-enter-to {
  position: absolute;
  width: 100%;
  top: 0;
}

.slide-enter-from {
  position: absolute;
  width: 100%;
  top: -100%;
}

.slide-leave-to {
  position: absolute;
  width: 100%;
  bottom: -100%;
}

.slide-leave-from {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
