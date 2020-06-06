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
            this.$store.dispatch("fetchMovies");
        }
    }
</script>