<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isMenuOpen = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <header class="bg-black text-gray-100 font-semibold w-full">
    <nav class="flex gap-4 md:gap-20 max-w-[1312px] mx-auto px-3 py-4 items-center">
      <!-- Кнопка для мобильного меню -->
      <div
        class="flex flex-col justify-center items-center cursor-pointer md:hidden"
        @click="toggleMenu"
      >
        <div
          class="w-6 h-0.5 rounded-md bg-gray-100 mb-1 transition-all duration-300"
          :class="{ 'transform rotate-45 translate-y-1.5': isMenuOpen }"
        ></div>
        <div
          class="w-6 h-0.5 rounded-md bg-gray-600 mb-1 transition-all duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        ></div>
        <div
          class="w-6 h-0.5 rounded-md bg-gray-600 transition-all duration-300"
          :class="{ 'transform -rotate-45 -translate-y-1.5': isMenuOpen }"
        ></div>
      </div>

      <!-- Логотип -->
      <router-link to="/">
        <img src="@/assets/images/svgs/logo.svg" alt="logo" />
      </router-link>

      <!-- Меню -->
      <div
        :class="{
          'fixed bottom-0 left-0 right-0 bg-black transition-transform duration-300 ease-out':
            isMobile,
          'transform translate-y-full': isMobile && !isMenuOpen,
          'transform translate-y-0': isMobile && isMenuOpen,
          flex: isMenuOpen || !isMobile,
          hidden: !isMenuOpen && isMobile,
          'flex-col': isMobile,
          'gap-4 p-4': isMobile,
          'md:flex-row': !isMobile
        }"
        class="md:flex gap-5"
      >
        <router-link to="/" class="header-link" active-class="header-link_active">
          Главная
        </router-link>
        <router-link to="/blog" class="header-link" active-class="header-link_active">
          Блог
        </router-link>
      </div>
    </nav>
  </header>
</template>
