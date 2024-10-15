<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <header class="bg-gray-800 py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center">Nos Services</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12">
      <section v-for="(service, index) in services" :key="index" class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-blue-400">{{ service.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(item, itemIndex) in service.items" :key="itemIndex" 
               class="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <component :is="item.icon" class="w-12 h-12 text-blue-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </section>
    </main>

    <section class="bg-blue-600 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
        <p class="mb-8 text-xl">Contactez-nous dès aujourd'hui pour discuter de vos besoins en infrastructure.</p>
        <router-link to="/contact" class="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300">
          Obtenir un devis gratuit
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Network, Wifi, Building2, Zap, Search, Sun } from 'lucide-vue-next'

const services = ref([
  {
    title: "I. Infrastructures Réseaux (fibre optique et cuivre)",
    items: [
      {
        icon: Network,
        title: "Réalisation des travaux",
        description: "Production et maintenance des infrastructures réseaux."
      },
      {
        icon: Wifi,
        title: "Pose de fibre optique",
        description: "Installation de fibre optique en tranchées manuelles."
      },
      {
        icon: Network,
        title: "Soudure de fibre optique",
        description: "Expertise en soudure de fibre optique pour des connexions fiables."
      }
    ]
  },
  {
    title: "II. Ligne d'Abonnés et Liaisons Spécialisées",
    items: [
      {
        icon: Wifi,
        title: "Production et maintenance",
        description: "Services pour lignes fixes, internet ADSL, LS, LSL."
      },
      {
        icon: Network,
        title: "Raccordement FTTH et FTTB",
        description: "Réalisation et raccordement pour la fibre jusqu'au domicile ou bâtiment."
      }
    ]
  },
  {
    title: "III. Travaux Génie Civil - BTP",
    items: [
      {
        icon: Building2,
        title: "Réalisation d'infrastructures",
        description: "Construction de canalisations et diverses infrastructures."
      },
      {
        icon: Building2,
        title: "Ouvrages hydrauliques",
        description: "Construction de caniveaux, châteaux d'eau, et pose de buses."
      },
      {
        icon: Building2,
        title: "VRD",
        description: "Travaux de Voirie et Réseaux Divers."
      },
      {
        icon: Building2,
        title: "Entretien et maintenance",
        description: "Services d'entretien d'espaces et maintenance générale."
      }
    ]
  },
  {
    title: "IV. Contrôle et Vérification Technique",
    items: [
      {
        icon: Search,
        title: "Contrôle qualité",
        description: "Garantie de prestations répondant aux normes de qualité les plus strictes."
      }
    ]
  },
  {
    title: "V. Travaux d'Électricité",
    items: [
      {
        icon: Zap,
        title: "Réalisation et maintenance",
        description: "Services pour éclairage public, entretien de réseaux, équipements de poste, BT-MT."
      },
      {
        icon: Zap,
        title: "Systèmes de sécurité",
        description: "Installation de caméras de vidéosurveillance et électricité industrielle."
      },
      {
        icon: Sun,
        title: "Énergie Renouvelable",
        description: "Vente, installation et maintenance de panneaux solaires."
      }
    ]
  }
])
</script>