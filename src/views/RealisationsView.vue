<template>
  <div class="bg-gray-900 text-gray-100">
    <section class="relative bg-gray-800 py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-blue-400">Nos Realisations</h1>
        <p class="text-xl mb-12">Decouvrez quelques-uns de nos projets les plus remarquables et innovants.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div class="relative h-64">
              <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <p class="text-sm text-gray-300">{{ project.category }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <button @click="openProjectModal(project)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">En savoir plus</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-400">Temoignages clients</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-gray-700 rounded-lg p-6 shadow-lg">
            <p class="text-gray-300 mb-4">&quot;{{ testimonial.content }}&quot;</p>
            <div class="flex items-center">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-400">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Pret a concretiser votre projet ?</h2>
        <router-link to="/contact" class="inline-block bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">Contactez-nous</router-link>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-gray-800 rounded-lg p-8 max-w-3xl w-full mx-4">
        <h2 class="text-3xl font-bold mb-4 text-blue-400">{{ selectedProject.title }}</h2>
        <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-lg mb-6" />
        <p class="text-gray-300 mb-4">{{ selectedProject.fullDescription }}</p>
        <h3 class="text-xl font-semibold mb-2 text-blue-400">Defis releves :</h3>
        <ul class="list-disc list-inside text-gray-300 mb-4">
          <li v-for="challenge in selectedProject.challenges" :key="challenge">{{ challenge }}</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2 text-blue-400">Resultats :</h3>
        <p class="text-gray-300 mb-6">{{ selectedProject.results }}</p>
        <button @click="closeProjectModal" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = [
  {
    id: 1,
    title: 'Reseau FTTH pour une ville intelligente',
    category: 'Infrastructures reseaux',
    image: '/placeholder.svg?text=FTTH+Project',
    description: 'Deploiement d\'un reseau de fibre optique a l\'echelle d\'une ville pour permettre la mise en place de services intelligents.',
    fullDescription: 'Nous avons concu et deploye un reseau FTTH (Fiber to the Home) complet pour une ville de 100 000 habitants. Ce projet ambitieux visait a fournir une connectivite ultra-rapide a tous les residents et entreprises, tout en jetant les bases pour le developpement de services de ville intelligente.',
    challenges: [
      'Coordination avec les autorites locales et les autres fournisseurs de services',
      'Gestion de l\'infrastructure existante et minimisation des perturbations',
      'Respect d\'un calendrier serre pour le deploiement a grande echelle'
    ],
    results: 'Le projet a ete acheve dans les delais, offrant une couverture de 98% de la ville. La vitesse moyenne d\'Internet a ete multipliee par 10, et la ville a pu lancer plusieurs initiatives de ville intelligente, notamment des systemes de gestion du trafic et de l\'energie en temps reel.'
  },
  {
    id: 2,
    title: 'Parc solaire pour centre de donnees',
    category: 'Electricite',
    image: '/placeholder.svg?text=Solar+Park',
    description: 'Conception et installation d\'un parc solaire de grande envergure pour alimenter un centre de donnees moderne.',
    fullDescription: 'Nous avons concu et installe un parc solaire de 50 MW pour alimenter un centre de donnees a haute performance. Ce projet visait a reduire significativement l\'empreinte carbone du centre tout en assurant une alimentation electrique fiable et constante.',
    challenges: [
      'Integration avec le reseau electrique existant du centre de donnees',
      'Optimisation de la production d\'energie dans un espace limite',
      'Mise en place de systemes de stockage d\'energie pour assurer une alimentation continue'
    ],
    results: 'Le parc solaire couvre desormais 80% des besoins energetiques du centre de donnees, reduisant les emissions de CO2 de 30 000 tonnes par an. Le projet a egalement permis de realiser des economies significatives sur les couts d\'electricite a long terme.'
  },
  {
    id: 3,
    title: 'Infrastructure 5G pour zone industrielle',
    category: 'Genie civil et Reseaux',
    image: '/placeholder.svg?text=5G+Infrastructure',
    description: 'Construction de l\'infrastructure necessaire au deploiement d\'un reseau 5G dans une grande zone industrielle.',
    fullDescription: 'Ce projet complexe combinait nos expertises en genie civil et en infrastructures reseaux pour deployer un reseau 5G de pointe dans une zone industrielle de 500 hectares. L\'objectif etait de fournir une connectivite ultra-rapide et a faible latence pour soutenir l\'industrie 4.0 et l\'IoT industriel.',
    challenges: [
      'Coordination des travaux de genie civil avec l\'installation des equipements reseau',
      'Gestion des interferences potentielles avec les equipements industriels existants',
      'Respect des normes de securite strictes de la zone industrielle'
    ],
    results: 'Le reseau 5G est maintenant operationnel, offrant des vitesses jusqu\'a 20 Gbps et une latence inferieure a 1 ms. Cela a permis aux entreprises de la zone d\'implementer des solutions d\'automatisation avancees et d\'ameliorer significativement leur productivite.'
  }
]

const testimonials = [
  {
    id: 1,
    content: 'BRIKEN Services a depasse toutes nos attentes. Leur expertise technique et leur professionnalisme ont ete essentiels a la reussite de notre projet d\'infrastructure reseau.',
    name: 'Marie Dubois',
    company: 'TechCorp SA',
    avatar: '/placeholder.svg?text=MD'
  },
  {
    id: 2,
    content: 'Le travail de l\'equipe de BRIKEN sur notre projet d\'energie solaire a ete remarquable. Ils ont su relever tous les defis avec creativite et efficacite.',
    name: 'Pierre Martin',
    company: 'GreenEnergy Inc.',
    avatar: '/placeholder.svg?text=PM'
  },
  {
    id: 3,
    content: 'La qualite du travail de genie civil realise par BRIKEN Services a depasse nos attentes. Leur attention aux details et leur respect des delais ont ete impressionnants.',
    name: 'Sophie Leroy',
    company: 'ConstructPro SARL',
    avatar: '/placeholder.svg?text=SL'
  }
]

const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}
</script>