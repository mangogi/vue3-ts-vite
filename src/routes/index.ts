import loginRouter from '../login/routes/rooter.ts'
import mainRouter from '../main/routes/index.ts'
const HelloWorld = {
  path: '/',
  name: 'HelloWorld',
  component: () => import('../components/HelloWorld.vue')
}
const routes = [
  HelloWorld,
  ...loginRouter,
  ...mainRouter,
]

export default routes