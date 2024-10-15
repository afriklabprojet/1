<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span class="text-xl font-bold">B</span>
            </div>
            <span class="text-xl font-semibold">
              <span class="text-blue-400">BRIKEN</span>
              <span class="text-gray-300">Services</span>
            </span>
          </router-link>
          
          <div class="hidden md:flex items-center space-x-6">
            <router-link 
              v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              class="text-gray-300 hover:text-white transition duration-300 ease-in-out relative group"
            >
              {{ item.name }}
              <span class="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </router-link>
            <router-link 
              to="/devis" 
              class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Devis gratuit
            </router-link>
          </div>

          <button @click="toggleMobileMenu" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-10 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-10 opacity-0"
        >
          <div v-if="isMobileMenuOpen" class="md:hidden mt-4 space-y-2">
            <router-link 
              v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              class="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition duration-300 ease-in-out"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
            <router-link 
              to="/devis" 
              class="block bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              @click="closeMobileMenu"
            >
              Devis gratuit
            </router-link>
          </div>
        </transition>
      </nav>
    </header>

    <main class="pt-20">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 py-8 mt-auto">
      <div class="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {{ currentYear }} BRIKEN Services. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Tarifs', path: '/tarifs' },
  { name: 'Espace Client', path: '/espace-client' },
  { name: 'Contact', path: '/contact' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const currentYear = computed(() => new Date().getFullYear())
</script>