import { Main } from './pages/Main/main'
import { About } from './pages/About/about'
import { Error } from './pages/Error/error'

export const routes = [
  {
    isExact: true,
    component: Main,
    path: '/',
    label: 'Main',
  },
  { isExact: true, component: Error, path: '/404', label: '' },
  { isExact: true, component: About, path: '/about', label: 'About' },
]
