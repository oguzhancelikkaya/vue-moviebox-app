<template>
    <div>
        <br/>
        <div class="card" style="width: 30rem;">
        <iframe class="card-img-top"  width="560" height="315" :src="movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="card-body">
            <h5 class="card-title">{{movie.name}}</h5>
            <div class="form-group">
                <p class="card-text">{{movie.description}}</p>
            </div>
            <div class="form-group">
             <label class="control-label"><b>Year:</b></label> <span class="card-text">{{movie.year}}</span>
            </div>
            <div class="form-group">
                <label class="control-label"><b>Creator:</b></label> <span class="card-text">{{movie.creator}}</span>
            </div>
            <div class="form-group">
                <label class="control-label"><b>Creator:</b></label> <span class="card-text">{{movie.stars}}</span>
            </div>
            <div class="form-group">
                <label class="control-label"><b>Duration:</b></label> <span class="card-text">{{movie.duration}}</span>
            </div>
            <a :href="movie.trailer" target="_blank" class="btn btn-primary">Watch Trailer</a>
        </div>
        </div>   
        
    </div>
</template>

<script>
    export default{
        computed:{
           movie(){
               return this.$store.state.movies.filter(movie => movie.id === this.$route.params.id)[0];
           }
        }

    }
</script>