import { createStore } from 'vuex'

const mutations = {
    setSatellites(state, customer_satellites) {
      state.customer_satellites = customer_satellites
    },
    setCenters(state, centres) {
      state.centres = centres
    },
    setSpaceCrafts(state, spacecrafts) {
      state.spacecrafts = spacecrafts
    }
  },
  state = {
    customer_satellites: null,
    centres: null,
    spacecrafts: null
  }

export default createStore({ mutations, state, strict: true })
