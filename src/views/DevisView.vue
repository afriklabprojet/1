<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">Demande de Devis</h1>
    
    <form @submit.prevent="submitDevis" class="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Nom complet</label>
        <input type="text" id="name" v-model="devis.name" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
      </div>
      
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Email</label>
        <input type="email" id="email" v-model="devis.email" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
      </div>
      
      <div class="mb-6">
        <label for="service" class="block mb-2 text-sm font-medium text-gray-300">Service</label>
        <select id="service" v-model="devis.service" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
          <option value="">Sélectionnez un service</option>
          <option value="reseaux">Infrastructures Réseaux</option>
          <option value="genie-civil">Travaux Génie Civil</option>
          <option value="electricite">Travaux d'Électricité</option>
        </select>
      </div>
      
      <div class="mb-6">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-300">Description du projet</label>
        <textarea id="description" v-model="devis.description" rows="4" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"></textarea>
      </div>
      
      <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Envoyer la demande de devis
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const devis = ref({
  name: '',
  email: '',
  service: '',
  description: ''
})

const submitDevis = () => {
  // Ici, vous pouvez ajouter la logique pour envoyer la demande de devis
  console.log('Demande de devis soumise:', devis.value)
  // Réinitialiser le formulaire ou rediriger l'utilisateur
}
</script>