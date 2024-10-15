<template>
  <div>
    <div v-if="compteRendus.length === 0" class="text-gray-400">
      Aucun compte rendu disponible pour le moment.
    </div>
    <ul v-else class="space-y-4">
      <li v-for="(cr, index) in compteRendus" :key="index" class="bg-gray-700 p-4 rounded-md">
        <h3 class="font-semibold mb-2">{{ cr.titre }}</h3>
        <p class="text-sm text-gray-300 mb-2">Date: {{ cr.date }}</p>
        <p>{{ cr.contenu }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const compteRendus = ref([
  {
    titre: "Installation fibre optique - Rue des Lilas, Bouaké",
    date: "15/05/2023",
    contenu: "L'équipe a installé 500m de fibre optique. Travaux terminés dans les délais prévus. Aucun incident à signaler."
  },
  {
    titre: "Maintenance réseau - Zone industrielle de Bouaké",
    date: "10/05/2023",
    contenu: "Remplacement de 3 switchs défectueux. Le réseau est maintenant pleinement opérationnel."
  }
])
</script>