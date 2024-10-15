<template>
  <div>
    <form @submit.prevent="soumettreRetour" class="mb-8">
      <div class="mb-4">
        <label for="note" class="block mb-2 text-sm font-medium text-gray-300">Note</label>
        <select id="note" v-model="retour.note" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
          <option value="">Sélectionnez une note</option>
          <option v-for="i in 5" :key="i" :value="i">{{ i }} étoile{{ i > 1 ? 's' : '' }}</option>
        </select>
      </div>
      
      <div class="mb-4">
        <label for="commentaire" class="block mb-2 text-sm font-medium text-gray-300">Commentaire</label>
        <textarea id="commentaire" v-model="retour.commentaire" rows="4" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"></textarea>
      </div>
      
      <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Envoyer le retour
      </button>
    </form>
    
    <h3 class="text-xl font-semibold mb-4">Avis récents</h3>
    <ul class="space-y-4">
      <li v-for="(avis, index) in avisClients" :key="index" class="bg-gray-700 p-4 rounded-md">
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 mr-2">★</span>
          <span>{{ avis.note }}/5</span>
        </div>
        <p>{{ avis.commentaire }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const retour = ref({
  note: '',
  commentaire: ''
})

const avisClients = ref([
  { note: 5, commentaire: "Excellent service ! L'équipe a été très professionnelle et efficace." },
  { note: 4, commentaire: "Bon travail dans l'ensemble. Un peu de retard sur les délais annoncés." }
])

const soumettreRetour = () => {
  // Ici, vous pouvez ajouter la logique pour enregistrer le retour client
  console.log('Retour client soumis:', retour.value)
  // Ajouter le nouveau retour à la liste des avis
  avisClients.value.unshift({
    note: parseInt(retour.value.note),
    commentaire: retour.value.commentaire
  })
  // Réinitialiser le formulaire
  retour.value = { note: '', commentaire: '' }
}
</script>