import auth from './auth'
import user from './user'
import product from './product'

const vuex = { auth, user, product }

const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
