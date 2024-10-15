<template>
    <div class="bg-gray-900 text-gray-100">
      <section class="relative bg-gray-800 py-24">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-8 text-blue-400">Contactez-nous</h1>
          <p class="text-xl mb-12">Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos projets.</p>
        </div>
      </section>
  
      <section class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-2xl font-bold mb-6 text-blue-400">Formulaire de contact</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                  <input v-model="form.name" type="text" id="name" required class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input v-model="form.email" type="email" id="email" required class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">Sujet</label>
                  <input v-model="form.subject" type="text" id="subject" required class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea v-model="form.message" id="message" rows="4" required class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">Envoyer</button>
              </form>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-6 text-blue-400">Nos coordonnées</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <MapPin class="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 class="font-semibold">Adresse</h3>
                    <p>123 Rue de l'Innovation, 75001 Paris, France</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Phone class="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 class="font-semibold">Téléphone</h3>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Mail class="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 class="font-semibold">Email</h3>
                    <p>contact@briken-services.com</p>
                  </div>
                </div>
              </div>
              <div class="mt-12">
                <h3 class="text-xl font-bold mb-4 text-blue-400">Horaires d'ouverture</h3>
                <ul class="space-y-2">
                  <li>Lundi - Vendredi : 9h00 - 18h00</li>
                  <li>Samedi : 9h00 - 12h00</li>
                  <li>Dimanche : Fermé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-16 bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold mb-8 text-center text-blue-400">Notre localisation</h2>
          <div class="h-96 rounded-lg overflow-hidden">
            <!-- Replace with an actual map component or embed -->
            <div class="w-full h-full bg-gray-700 flex items-center justify-center">
              <p class="text-gray-400">Carte interactive ici</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { MapPin, Phone, Mail } from 'lucide-vue-next'
  
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const submitForm = () => {
    // Implement form submission logic here
    console.log('Form submitted:', form.value)
    alert('Votre message a été envoyé. Nous vous contacterons bientôt.')
    // Reset form after submission
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  </script>