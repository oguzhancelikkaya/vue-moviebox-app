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
    import {mapActions} from 'vuex';

    export default{
        components:{
            newMovie: NewMovie,
            movieList: MovieList
        },
        methods:{
            ...mapActions([
                'fetchMovies'
            ])
        },
        created() {
            if(this.$store.getters.getMovies.length == 0){
                this.fetchMovies();
            }   
        }
    }
</script>