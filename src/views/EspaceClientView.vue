<template>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 text-center">Espace Client</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4 text-blue-400">Paiement</h2>
          <PaiementComponent />
        </div>
        
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4 text-blue-400">Comptes Rendus</h2>
          <CompteRenduComponent />
        </div>
      </div>
      
      <div class="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4 text-blue-400">Retour Client</h2>
        <RetourClientComponent />
      </div>
    </div>
  </template>
  
  <script setup>
  import PaiementComponent from '../components/PaiementComponent.vue'
  import CompteRenduComponent from '../components/CompteRenduComponent.vue'
  import RetourClientComponent from '../components/RetourClientComponent.vue'
  </script>