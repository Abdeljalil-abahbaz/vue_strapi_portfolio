import { createStore  } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    hero: {},
    skills: [],
    experiences: [],
    formations: [],
    services: []
  },
  mutations: {
    setData(state, payload) {
      state[payload.action]= payload.data;
    }
  },
  actions: {
    async fetchData({ commit }, payload) {
      const {params, action} = payload
      try {
        const response = await axios.get(`http://localhost:4000/api/${params}`);
        commit('setData', {data:response.data.data, action});
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  },
  getters: {
    getHero: state => state.hero,
    getSkills: state => state.skills,
    getExperiences: state => state.experiences,
    getFormations: state => state.formations,
    getServices: state => state.services
  }
});
