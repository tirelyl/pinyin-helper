import Store from '../store'

const config = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    history: []
  }
})

export default config
