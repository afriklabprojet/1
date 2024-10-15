import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AProposView from '../views/AProposView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import TarifsView from '../views/TarifsView.vue'
import DevisView from '../views/DevisView.vue'
import EspaceClientView from '../views/EspaceClientView.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: AccueilView
  },
  {
    path: '/a-propos',
    name: 'A propos',
    component: AProposView
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView
  },
  {
    path: '/tarifs',
    name: 'Tarifs',
    component: TarifsView
  },
  {
    path: '/devis',
    name: 'Devis',
    component: DevisView
  },
  {
    path: '/espace-client',
    name: 'Espace Client',
    component: EspaceClientView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
})

export default router