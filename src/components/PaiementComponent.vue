<template>
  <div>
    <form @submit.prevent="soumettrePayment">
      <div class="mb-4">
        <label for="montant" class="block mb-2 text-sm font-medium text-gray-300">Montant à payer (FCFA)</label>
        <input type="number" id="montant" v-model="payment.montant" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
      </div>
      
      <div class="mb-4">
        <label for="numeroCarte" class="block mb-2 text-sm font-medium text-gray-300">Numéro de carte</label>
        <input type="text" id="numeroCarte" v-model="payment.numeroCarte" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="dateExpiration" class="block mb-2 text-sm font-medium text-gray-300">Date d'expiration</label>
          <input type="text" id="dateExpiration" v-model="payment.dateExpiration" placeholder="MM/AA" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
        </div>
        <div>
          <label for="cvv" class="block mb-2 text-sm font-medium text-gray-300">CVV</label>
          <input type="text" id="cvv" v-model="payment.cvv" required class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
        </div>
      </div>
      
      <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Effectuer le paiement
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const payment = ref({
  montant: '',
  numeroCarte: '',
  dateExpiration: '',
  cvv: ''
})

const soumettrePayment = () => {
  // Ici, vous pouvez ajouter la logique pour traiter le paiement
  console.log('Paiement soumis:', payment.value)
  // Réinitialiser le formulaire ou afficher une confirmation
}
</script>