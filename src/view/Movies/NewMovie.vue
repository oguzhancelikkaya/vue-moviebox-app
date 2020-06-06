<template>
    <div class="container">
        <div class="jumbotron">
            <form>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Movie Name</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="movie.name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                    <textarea type="password" class="form-control" id="description" placeholder="Description" v-model="movie.description"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="year" class="col-sm-2 col-form-label">Year</label>
                    <div class="col-sm-10">
                    <input type="date" class="form-control" id="year" placeholder="Year" v-model="movie.year">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="creator" class="col-sm-2 col-form-label">Creator</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="creator" placeholder="Creator" v-model="movie.creator">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="stars" class="col-sm-2 col-form-label">Stars</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="stars" placeholder="Stars" v-model="movie.stars">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="trailer" class="col-sm-2 col-form-label">Trailer</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="trailer" placeholder="Trailer" v-model="movie.trailer">
                    </div>
                </div>
                 <div class="form-group row">
                    <label for="duration" class="col-sm-2 col-form-label">Duration</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="duration" placeholder="Duration" v-model="movie.duration">
                    </div>
                </div>               
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" @click.prevent="addNewMovie">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                movie: this.getMovieObject()
            }
        },
        methods: {
            addNewMovie(){
                this.$store.dispatch('addMovie', this.movie);
                this.movie = this.getMovieObject();
            },
            getMovieObject(){
                return {
                        name: '',
                        year: '',
                        description: '',
                        creator: "",
                        stars: "",
                        trailer:'',
                        duration: ''
                    }
                
            }
        }
    }
</script>