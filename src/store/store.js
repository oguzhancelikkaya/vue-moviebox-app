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


export const store = new Vuex.Store({
    state:{
        movies: []
    },
    getters:{
        getMovies: state => {
            return state.movies;
        },
        getMovie: (state) => (id) => {
            return state.movies.filter(movie => movie.id === id)[0];
        }
    },
    mutations:{
        setMovies: (state, movies) => {
            state.movies = movies;
        },
        addMovie: (state,movie) =>{
            state.movies.push(movie);
        }
    },
    actions:{
        addMovie: ({commit}, payload) => {
            this.resource.saveAlt(payload).then(response => {
                return response.json();
            })
            .then(data => {
                payload.id = data.name;
                commit('addMovie',payload);
            });
        },
        fetchMovies: ({commit}) => {
            this.resource = Vue.resource('movies.json', {}, customActions);
            this.resource.getData()
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
})