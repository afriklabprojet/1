<template>
  <div class="bg-gray-900 text-gray-100">
    <section class="relative bg-gray-800 py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-blue-400">Blog et Actualites</h1>
        <p class="text-xl mb-12">Restez informe des dernieres nouvelles et tendances dans le domaine des infrastructures reseaux, du genie civil et de l&apos;electricite.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in blogPosts" :key="post.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{{ post.category }}</span>
                <span class="text-gray-400 text-sm ml-4">{{ post.date }}</span>
              </div>
              <h2 class="text-xl font-bold mb-4 text-blue-400">{{ post.title }}</h2>
              <p class="text-gray-300 mb-4">{{ post.excerpt }}</p>
              <button @click="openBlogModal(post)" class="text-blue-400 hover:text-blue-300 font-medium">Lire la suite</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-400">Abonnez-vous a notre newsletter</h2>
        <p class="text-xl mb-8">Recevez nos derniers articles et actualites directement dans votre boite mail.</p>
        <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto flex">
          <input v-model="email" type="email" placeholder="Votre adresse e-mail" required class="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
          <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">S&apos;abonner</button>
        </form>
      </div>
    </section>

    <!-- Blog Post Modal -->
    <div v-if="selectedPost" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-gray-800 rounded-lg p-8 max-w-3xl w-full mx-4 my-8">
        <h2 class="text-3xl font-bold mb-4 text-blue-400">{{ selectedPost.title }}</h2>
        <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-64 object-cover rounded-lg mb-6" />
        <div class="flex items-center mb-4">
          <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{{ selectedPost.category }}</span>
          <span class="text-gray-400 text-sm ml-4">{{ selectedPost.date }}</span>
        </div>
        <div class="text-gray-300 mb-6" v-html="selectedPost.content"></div>
        <button @click="closeBlogModal" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogPosts = [
  {
    id: 1,
    title: "L'avenir des reseaux 5G dans l'industrie",
    category: 'Infrastructures reseaux',
    date: '15 mai 2023',
    image: '/placeholder.svg?text=5G+Networks',
    excerpt: "Decouvrez comment la 5G revolutionne l'industrie et ouvre la voie a de nouvelles possibilites pour l'IoT et l'automatisation.",
    content: `
      <p>La 5G est en train de transformer radicalement le paysage industriel, offrant des vitesses de connexion sans precedent et une latence ultra-faible. Cette technologie ouvre la voie a de nouvelles applications revolutionnaires dans l'Internet des Objets (IoT) et l'automatisation industrielle.</p>
      <h3 class="text-xl font-bold mt-4 mb-2 text-blue-400">Les avantages de la 5G pour l'industrie</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Vitesses de connexion jusqu'a 20 Gbps</li>
        <li>Latence inferieure a 1 milliseconde</li>
        <li>Capacite a connecter jusqu'a 1 million d'appareils par kilometre carre</li>
        <li>Fiabilite accrue pour les applications critiques</li>
      </ul>
      <p>Ces caracteristiques permettent le developpement de nouvelles applications telles que :</p>
      <ul class="list-disc list-inside mb-4">
        <li>La maintenance predictive en temps reel</li>
        <li>La realite augmentee pour l'assistance a distance</li>
        <li>Les vehicules autonomes dans les environnements industriels</li>
        <li>L'automatisation avancee des chaines de production</li>
      </ul>
      <p>Chez BRIKEN Services, nous sommes a l'avant-garde de cette revolution, travaillant sur des projets d'infrastructure 5G qui propulseront l'industrie vers l'avenir.</p>
    `
  },
  {
    id: 2,
    title: "L'importance croissante de l'energie solaire dans l'industrie",
    category: 'Electricite',
    date: '3 juin 2023',
    image: '/placeholder.svg?text=Solar+Energy',
    excerpt: "Explorez comment l'energie solaire devient une solution incontournable pour les entreprises cherchant a reduire leur empreinte carbone et leurs couts energetiques.",
    content: `
      <p>L'energie solaire connait une croissance exponentielle dans le secteur industriel, offrant aux entreprises une solution durable pour reduire a la fois leur empreinte carbone et leurs couts energetiques a long terme.</p>
      <h3 class="text-xl font-bold mt-4 mb-2 text-blue-400">Avantages de l'energie solaire pour l'industrie</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Reduction significative des couts energetiques</li>
        <li>Diminution de l'empreinte carbone</li>
        <li>Independance energetique accrue</li>
        <li>Amelioration de l'image de marque</li>
      </ul>
      <p>Les recentes avancees technologiques ont rendu les systemes solaires plus efficaces et plus abordables que jamais. Les entreprises peuvent desormais :</p>
      <ul class="list-disc list-inside mb-4">
        <li>Installer des panneaux solaires sur les toits des batiments industriels</li>
        <li>Creer des parcs solaires dedies pour alimenter de grandes installations</li>
        <li>Integrer des systemes de stockage d'energie pour une utilisation optimale</li>
      </ul>
      <p>Chez BRIKEN Services, nous accompagnons les entreprises dans leur transition vers l'energie solaire, de la conception a l'installation et la maintenance de systemes sur mesure.</p>
    `
  },
  {
    id: 3,
    title: "Les defis du genie civil dans les projets d'infrastructure moderne",
    category: 'Genie civil',
    date: '20 juin 2023',
    image: '/placeholder.svg?text=Civil+Engineering',
    excerpt: "Analysez les defis complexes auxquels font face les ingenieurs en genie civil dans la realisation de projets d'infrastructure a grande echelle.",
    content: `
      <p>Les projets d'infrastructure moderne posent des defis uniques aux ingenieurs en genie civil, necessitant des approches innovantes et une expertise multidisciplinaire.</p>
      <h3 class="text-xl font-bold mt-4 mb-2 text-blue-400">Principaux defis du genie civil moderne</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Integration de technologies avancees dans les structures traditionnelles</li>
        <li>Conception de structures resistantes aux changements climatiques</li>
        <li>Minimisation de l'impact environnemental des grands projets</li>
        <li>Gestion de projets complexes impliquant de multiples parties prenantes</li>
      </ul>
      <p>Pour relever ces defis, les ingenieurs en genie civil adoptent de nouvelles approches :</p>
      <ul class="list-disc list-inside mb-4">
        <li>Utilisation de la modelisation BIM (Building Information Modeling) pour une meilleure coordination</li>
        <li>Integration de materiaux innovants et durables</li>
        <li>Adoption de methodes de construction modulaire et prefabriquee</li>
        <li>Mise en oeuvre de systemes de surveillance en temps reel pour la maintenance predictive</li>
      </ul>
      <p>Chez BRIKEN Services, notre equipe de genie civil est formee aux dernieres technologies et methodologies pour relever ces defis et livrer des projets d'infrastructure de pointe.</p>
    `
  }
]

const selectedPost = ref(null)
const email = ref('')

const openBlogModal = (post) => {
  selectedPost.value = post
}

const closeBlogModal = () => {
  selectedPost.value = null
}

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic here
  console.log('Subscribing email:', email.value)
  alert(`Merci de vous etre abonne avec l'adresse : ${email.value}`)
  email.value = ''
}
</script>