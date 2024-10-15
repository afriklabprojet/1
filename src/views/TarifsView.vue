<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <header class="bg-gray-800 py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center">Tarifs et Délais</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12">
      <p class="text-xl text-center mb-8">
        Découvrez nos tarifs compétitifs et nos délais de réalisation estimés pour chaque service à Bouaké et ses environs.
      </p>

      <div v-for="(category, index) in serviceCategories" :key="index" class="mb-12">
        <h2 class="text-3xl font-semibold mb-6 text-blue-400">{{ category.name }}</h2>
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-700">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Prix (FCFA)</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Délai estimé</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-600">
              <tr v-for="(service, serviceIndex) in category.services" :key="serviceIndex" class="hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">{{ service.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ service.price }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ service.delay }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-blue-600 rounded-lg p-8 mt-12">
        <h2 class="text-2xl font-semibold mb-4">Besoin d'un devis personnalisé ?</h2>
        <p class="mb-6">
          Nos tarifs peuvent varier en fonction de la complexité et de l'ampleur de votre projet. 
          N'hésitez pas à nous contacter pour obtenir un devis sur mesure pour Bouaké et ses environs.
        </p>
        <router-link 
          to="/devis" 
          class="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Demander un devis
        </router-link>
      </div>
    </main>

    <section class="bg-gray-800 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-8 text-center">Foire aux questions</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-700 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">{{ faq.question }}</h3>
            <p class="text-gray-300">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const serviceCategories = ref([
  {
    name: "Infrastructures Réseaux",
    services: [
      { name: "Installation de fibre optique", price: "9 800 FCFA / mètre", delay: "1-2 jours / 100m" },
      { name: "Soudure de fibre optique", price: "32 500 FCFA / point", delay: "2-4 heures / point" },
      { name: "Installation de câblage cuivre", price: "6 500 FCFA / mètre", delay: "1 jour / 200m" },
      { name: "Configuration de switch réseau", price: "130 000 FCFA / unité", delay: "2-4 heures / switch" },
    ]
  },
  {
    name: "Travaux Génie Civil",
    services: [
      { name: "Réalisation de tranchée", price: "52 000 FCFA / mètre", delay: "1-2 jours / 50m" },
      { name: "Construction de caniveaux", price: "78 000 FCFA / mètre", delay: "3-5 jours / 10m" },
      { name: "Pose de chambres de tirage", price: "325 000 FCFA / unité", delay: "1 jour / chambre" },
      { name: "Réfection de chaussée", price: "97 500 FCFA / m²", delay: "1-2 jours / 100m²" },
    ]
  },
  {
    name: "Travaux d'Électricité",
    services: [
      { name: "Installation de panneaux solaires", price: "À partir de 5 200 000 FCFA", delay: "2-3 jours / installation" },
      { name: "Pose de câblage électrique", price: "3 250 FCFA / mètre", delay: "1 jour / 100m" },
      { name: "Installation de systèmes de secours", price: "975 000 FCFA / système", delay: "1-2 jours / système" },
      { name: "Mise aux normes tableau électrique", price: "À partir de 325 000 FCFA", delay: "1 jour / intervention" },
    ]
  }
])

const faqs = ref([
  {
    question: "Les prix indiqués sont-ils définitifs ?",
    answer: "Les prix affichés sont des estimations de base pour la région de Bouaké. Le coût final peut varier en fonction de la complexité du projet et des conditions spécifiques du site."
  },
  {
    question: "Comment sont calculés les délais de réalisation ?",
    answer: "Les délais indiqués sont des estimations basées sur notre expérience à Bouaké et ses environs. Ils peuvent varier en fonction de la complexité du projet, des conditions météorologiques et d'autres facteurs externes."
  },
  {
    question: "Proposez-vous des tarifs dégressifs pour les grands projets ?",
    answer: "Oui, nous offrons des tarifs dégressifs pour les projets de grande envergure à Bouaké et dans toute la Côte d'Ivoire. N'hésitez pas à nous contacter pour un devis personnalisé."
  },
  {
    question: "Les frais de déplacement sont-ils inclus dans les prix ?",
    answer: "Les frais de déplacement dans Bouaké sont généralement inclus. Pour les projets en dehors de Bouaké, des frais supplémentaires peuvent s'appliquer. Ils seront calculés en fonction de la distance et inclus dans le devis final."
  }
])
</script>