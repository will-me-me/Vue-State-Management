import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Vue State Management",
    links: ["http://google.com", "http://coursetro.com", "http://youtube.com"],
  },
  getters: {
    countLinks: (state) => {
      return state.links.length;
    },
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    },
  },
  actions: {
    removeLink: (contex, link) => {
      contex.commit("REMOVE_LINK", link);
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 1500);
        // reject();
      });
    },
  },
  modules: {},
});
