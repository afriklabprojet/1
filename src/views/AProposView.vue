<template>
  <div class="bg-gray-900 text-gray-100">
    <section class="relative bg-gray-800 py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-blue-400">A propos de BRIKEN Services</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg mb-6">
              BRIKEN Services est une entreprise leader dans les domaines des infrastructures reseaux, du genie civil et de l'electricite. Depuis notre creation, nous nous efforcons de fournir des solutions innovantes et de haute qualite a nos clients.
            </p>
            <p class="text-lg">
              Notre equipe d'experts qualifies et passionnes travaille sans relache pour garantir la reussite de chaque projet, qu'il s'agisse de petites installations ou de grands chantiers d'infrastructure.
            </p>
          </div>
          <div class="relative h-64 md:h-full">
            <img :src="teamImage" alt="L'equipe BRIKEN" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-blue-400">Notre histoire</h2>
        <p class="text-lg mb-6">
          Fondee en 2005, BRIKEN Services a connu une croissance constante grace a son engagement envers l'excellence et l'innovation. Au fil des annees, nous avons elargi notre gamme de services pour repondre aux besoins changeants de nos clients et de l'industrie.
        </p>
        <p class="text-lg">
          Aujourd'hui, nous sommes fiers d'etre reconnus comme un acteur majeur dans notre domaine, contribuant au developpement des infrastructures essentielles de notre region et au-dela.
        </p>
      </div>
    </section>

    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-400">Nos valeurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="index" class="bg-gray-700 rounded-lg p-6 shadow-lg">
            <div class="text-3xl mb-4 text-blue-400">
              <component :is="value.icon" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ value.name }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-blue-400">Nos certifications</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(cert, index) in certifications" :key="index" class="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div class="text-3xl mb-4 text-blue-400">
              <component :is="cert.icon" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-400">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Award, Shield, Zap, CheckCircle } from 'lucide-vue-next'

const teamImage = ref('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')

const values = [
  {
    name: 'Qualite',
    description: 'Nous nous engageons a fournir des services de la plus haute qualite, en respectant les normes les plus strictes de l\'industrie.',
    icon: Award
  },
  {
    name: 'Innovation',
    description: 'Nous restons a la pointe de la technologie pour offrir des solutions innovantes et efficaces a nos clients.',
    icon: Zap
  },
  {
    name: 'Integrite',
    description: 'Nous menons nos activites avec honnetete, transparence et respect envers nos clients, partenaires et employes.',
    icon: Shield
  }
]

const certifications = [
  {
    name: 'ISO 9001',
    description: 'Management de la qualite',
    icon: CheckCircle
  },
  {
    name: 'ISO 14001',
    description: 'Management environnemental',
    icon: CheckCircle
  },
  {
    name: 'OHSAS 18001',
    description: 'Sante et securite au travail',
    icon: CheckCircle
  },
  {
    name: 'Qualifelec',
    description: 'Qualification professionnelle de l\'equipement electrique',
    icon: CheckCircle
  }
]
</script>