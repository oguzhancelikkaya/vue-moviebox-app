import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Vuex);

Vue.http.options.root = 'https://vue-moviebox-app.firebaseio.com/';

const customActions = {
    saveAlt: {method: 'POST', url: 'movies.json'},
    getData: {method: 'GET', url: 'movies.json'}
};


const state = {
    movies: []
}

const getters = {
    getMovies: state => {
        return state.movies;
    },
    getMovie: (state) => (id) => {
        return state.movies.filter(movie => movie.id === id)[0];
    }
}

const mutations = {
    setMovies: (state, movies) => {
        state.movies = movies;
    },
    addMovie: (state,movie) =>{
        state.movies.push(movie);
    }
}

const actions = {
    addMovie: ({commit}, payload) => {
        Vue.resource.saveAlt(payload).then(response => {
            return response.json();
        })
        .then(data => {
            payload.id = data.name;
            commit('addMovie',payload);
        });
    },
    fetchMovies: ({commit}) => {
        Vue.resource = Vue.resource('movies.json', {}, customActions);
        Vue.resource.getData()
        .then(response => {
            return response.json();
        })
        .then(data => {
            const resultArray = [];
            for (let key in data) {
                data[key].id = key;
                resultArray.push(data[key]);
            }
            commit('setMovies', resultArray);
           
        });
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}