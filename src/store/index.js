import { storeonDevtools } from 'storeon/devtools'
import { createStoreon } from 'storeon'
import { routerNavigate } from '@storeon/router'
import router from './router'

const store = createStoreon([
  router,
  storeonDevtools,
])

const navigate = (target) => {
  console.log('NAVIGATING TO', target)
  store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
