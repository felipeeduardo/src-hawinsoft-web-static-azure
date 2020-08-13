import auth from './auth'
import user from './user'
import rpa from './rpa'

const vuex = { auth, user, rpa }

const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
