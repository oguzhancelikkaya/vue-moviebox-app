<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link to="/"><a class="navbar-brand" href="#">
                    <img src="/src/assets/moviebox.png" width="30" height="30" class="d-inline-block align-top" alt=""> Movie Box
                    </a></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                
                        <router-link to="/" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a></router-link>
                        <router-link to="/movies" tag="li" class="nav-item" active-class="active"><a class="nav-link">Movies</a></router-link>
        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>