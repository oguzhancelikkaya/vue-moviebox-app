<template>
    <div class="container">
    <br>
        <ul class="list-group">
            <li v-for="roll in movies" class="list-group-item">
                <router-link :to="'/movies/'+roll.id" tag="span" >{{roll.name}} </router-link> 
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default{
        computed:{
            ...mapGetters({
                movies:'getMovies'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .list-group{
        height: 198px;
        overflow: auto;
        li{
            span{
                cursor:pointer;
                color:#444;
                &:hover{
                    color:black;
                }
            }
        }
    }
    .material-icons{
        vertical-align:middle;
        float:right;
    }
</style>