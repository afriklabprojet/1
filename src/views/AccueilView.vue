<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" alt="Background" class="w-full h-full object-cover filter brightness-50">
      </div>
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
          <span class="block">Construisons l'avenir</span>
          <span class="block text-blue-400">des infrastructures</span>
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-300">
          BRIKEN Services : Votre partenaire de confiance pour les réseaux, le génie civil et l'électricité
        </p>
        <div class="animate-fade-in-up animation-delay-600">
          <router-link to="/contact" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mr-4">
            Contactez-nous
          </router-link>
          <router-link to="/services" class="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Nos services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-400">Nos services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
            <div class="text-4xl mb-4 text-blue-400">
              <component :is="service.icon" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-white">{{ service.name }}</h3>
            <p class="text-gray-300 mb-4">{{ service.description }}</p>
            <router-link :to="`/services/${service.slug}`" class="text-blue-400 hover:text-blue-300 font-medium">En savoir plus &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-400">Pourquoi choisir BRIKEN Services ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(reason, index) in reasons" :key="index" class="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div class="text-3xl mb-4 text-blue-400">
              <component :is="reason.icon" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-white">{{ reason.title }}</h3>
            <p class="text-gray-300">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Prêt à démarrer votre projet ?</h2>
        <router-link to="/devis" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          Demander un devis
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Network, Building2, Zap, Award, Users, Lightbulb } from 'lucide-vue-next'

const services = [
  {
    name: 'Infrastructures réseaux',
    description: 'Installation et maintenance de réseaux de télécommunication, y compris la fibre optique et les systèmes sans fil.',
    slug: 'reseaux',
    icon: Network
  },
  {
    name: 'Génie civil',
    description: 'Réalisation de travaux de construction et d\'aménagement pour les infrastructures de télécommunication et d\'énergie.',
    slug: 'genie-civil',
    icon: Building2
  },
  {
    name: 'Électricité',
    description: 'Installation et maintenance de systèmes électriques, y compris les solutions d\'énergie renouvelable.',
    slug: 'electricite',
    icon: Zap
  }
]

const reasons = [
  {
    title: 'Expertise',
    description: 'Notre équipe d\'experts qualifiés possède une vaste expérience dans tous nos domaines d\'intervention.',
    icon: Award
  },
  {
    title: 'Service client',
    description: 'Nous nous engageons à fournir un service client exceptionnel et à dépasser vos attentes.',
    icon: Users
  },
  {
    title: 'Innovation',
    description: 'Nous restons à la pointe de la technologie pour vous offrir les solutions les plus innovantes.',
    icon: Lightbulb
  }
]
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}
</style>