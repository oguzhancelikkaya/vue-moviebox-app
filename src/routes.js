import Home from './view/Home.vue';
import Movies from './view/Movies/Movies.vue';
import MovieHome from './view/Movies/MovieHome.vue';
import MovieDetails from './view/Movies/MovieDetails.vue';

export const routes = [
  {path: '/', component: Home},
  { path: '/movies', component: Movies, children: [
    { path: '', component: MovieHome },
    { path: ':id', component: MovieDetails }
  ] },
];
