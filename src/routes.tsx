import { createRootRoute, Router, Route, createRouter } from '@tanstack/react-router'
import Root from './pages/Root'
import Home from './pages/Home'
import Market from './pages/Market'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import Saved from './pages/Saved'
import Billboard from './pages/Billboard'
import Page from './pages/Layout'
import { BillTabs } from './components/BillTabs'
import MusicPage from './pages/music'
import { CarouselDialog } from './pages/Test'
import Workshop from './pages/Workshop'
import Taka from './pages/Taka'
import Products from './pages/Products'
import Services from './pages/Services'

const rootRoute = createRootRoute({
  component: Page,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const marketRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/market',
  component: Market,
})

const billboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/billboard',
  component: Billboard,
})

const messagesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/messages',
  component: Messages,
})

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
})

const savedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/saved',
  component: Saved,
})

const workshopRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/workshop',
  component: Workshop,
})

const productsRoute = new Route({
  getParentRoute: () => marketRoute,
  path: '/products',
  component: Products,
})

const servicesRoute = new Route({
  getParentRoute: () => marketRoute,
  path: '/services',
  component: Services,
})

const takaRoute = new Route({
  getParentRoute: () => marketRoute,
  path: '/taka',
  component: Taka,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  marketRoute.addChildren([productsRoute, servicesRoute, takaRoute]),
  billboardRoute,
  messagesRoute,
  profileRoute,
  savedRoute,
  workshopRoute,
])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
