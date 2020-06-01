<template>
    <div>
        <movie-list></movie-list>
        <br>
        <new-movie></new-movie>
    </div>
</template>

<script>
    import NewMovie from './NewMovie.vue';
    import MovieList from './MovieList.vue';
    import { eventBus } from '../../main';

    export default{
        components:{
            newMovie: NewMovie,
            movieList: MovieList
        },
        created() {
            eventBus.$on('movieAdded', (movie) => {
                this.resource.saveAlt(movie).then(response => {
                            return response.json();
                        })
                        .then(data => {
                            movie.id = data.name;
                            this.$store.state.movies.push(movie);
                        });
            });
            eventBus.$on('fetchMovies', (movie) => {
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
                            this.$store.state.movies = resultArray;
                           
                        });
            });
            const customActions = {
                saveAlt: {method: 'POST', url: 'movies.json'},
                getData: {method: 'GET', url: 'movies.json'}
            };
            this.resource = this.$resource('movies.json', {}, customActions);

            eventBus.$emit('fetchMovies');
           
        }
    }
</script>