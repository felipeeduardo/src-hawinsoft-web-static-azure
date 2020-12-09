import auth from './auth'
import user from './user'
import rpa from './rpa'
import payment from './payment'

const vuex = { auth, user, rpa, payment }

const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
