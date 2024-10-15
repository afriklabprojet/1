<template>
  <div class="bg-gray-900 text-gray-100">
    <section class="relative bg-gray-800 py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-blue-400">Foire aux questions</h1>
        <p class="text-xl mb-12">Trouvez des reponses aux questions les plus frequemment posees sur nos services et notre entreprise.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div v-for="(category, index) in faqCategories" :key="index" class="mb-12">
            <h2 class="text-2xl font-bold mb-6 text-blue-400">{{ category.title }}</h2>
            <div class="space-y-6">
              <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 @click="toggleAnswer(category.id, itemIndex)" class="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center">
                  {{ item.question }}
                  <ChevronDown v-if="!item.isOpen" class="w-5 h-5 text-blue-400" />
                  <ChevronUp v-else class="w-5 h-5 text-blue-400" />
                </h3>
                <p v-show="item.isOpen" class="text-gray-300 mt-2">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-400">Vous n&apos;avez pas trouve votre reponse ?</h2>
        <p class="text-xl mb-8">N&apos;hesitez pas a nous contacter directement pour toute question supplementaire.</p>
        <router-link to="/contact" class="inline-block bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Contactez-nous</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const faqCategories = ref([
  {
    id: 'general',
    title: 'Questions generales',
    items: [
      {
        question: 'Quels sont les principaux services proposes par BRIKEN Services ?',
        answer: 'BRIKEN Services propose principalement des services dans trois domaines : les infrastructures reseaux, le genie civil et l\'electricite. Cela inclut l\'installation et la maintenance de reseaux de telecommunication, la realisation de travaux de construction pour les infrastructures, et l\'installation de systemes electriques, y compris les solutions d\'energie renouvelable.',
        isOpen: false
      },
      {
        question: 'Dans quelles regions intervenez-vous ?',
        answer: 'BRIKEN Services intervient principalement en France metropolitaine, mais nous pouvons egalement realiser des projets dans d\'autres pays europeens selon les besoins de nos clients. N\'hesitez pas a nous contacter pour discuter de votre projet, quelle que soit sa localisation.',
        isOpen: false
      },
      {
        question: 'Travaillez-vous avec des particuliers ou uniquement avec des entreprises ?',
        answer: 'Nous travaillons principalement avec des entreprises, des collectivites et des organismes publics. Cependant, pour certains projets d\'envergure, nous pouvons egalement intervenir pour des particuliers. N\'hesitez pas a nous contacter pour discuter de votre projet specifique.',
        isOpen: false
      }
    ]
  },
  {
    id: 'services',
    title: 'Questions sur nos services',
    items: [
      {
        question: 'Quelle est la duree moyenne d\'un projet d\'infrastructure reseau ?',
        answer: 'La duree d\'un projet d\'infrastructure reseau peut varier considerablement en fonction de son ampleur et de sa complexite. Un petit projet peut etre realise en quelques semaines, tandis qu\'un projet a grande echelle peut s\'etendre sur plusieurs mois, voire annees. Nous fournissons toujours une estimation precise du delai lors de l\'etablissement du devis.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des services de maintenance apres l\'installation ?',
        answer: 'Oui, nous proposons des services de maintenance pour tous nos projets. Nous offrons des contrats de maintenance preventive et corrective pour assurer le bon fonctionnement et la longevite de vos installations.',
        isOpen: false
      },
      {
        question: 'Quels types de projets de genie civil realisez-vous ?',
        answer: 'Nos projets de genie civil comprennent la construction de canalisations, les travaux de terrassement, l\'amenagement de sites pour les infrastructures de telecommunication et d\'energie, ainsi que la construction de fondations pour les equipements lourds.',
        isOpen: false
      }
    ]
  },
  {
    id: 'devis',
    title: 'Questions sur les devis et tarifs',
    items: [
      {
        question: 'Comment obtenir un devis pour mon projet ?',
        answer: 'Vous pouvez obtenir un devis en remplissant le formulaire de demande de devis sur notre site web, en nous contactant par telephone ou par email. Nous vous repondrons dans les plus brefs delais pour discuter de votre projet et vous fournir une estimation detaillee.',
        isOpen: false
      },
      {
        question: 'Vos devis sont-ils gratuits ?',
        answer: 'Oui, nos devis sont entierement gratuits et sans engagement. Nous croyons en la transparence et souhaitons vous fournir toutes les informations necessaires pour prendre une decision eclairee.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des tarifs degressifs pour les grands projets ?',
        answer: 'Oui, nous proposons des tarifs degressifs pour les projets de grande envergure ou pour les clients avec lesquels nous avons des contrats a long terme. Chaque projet etant unique, nous adaptons nos tarifs en fonction de ses specificites.',
        isOpen: false
      }
    ]
  }
])

const toggleAnswer = (categoryId, itemIndex) => {
  const category = faqCategories.value.find(cat => cat.id === categoryId)
  if (category) {
    category.items[itemIndex].isOpen = !category.items[itemIndex].isOpen
  }
}
</script>