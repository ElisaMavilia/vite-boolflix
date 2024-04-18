import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        serie: 'search/tv'
    },
    options:{
        params: {
            api_key: 'fef663df583834922ff3702dcfcbbcb6',
            query: ''
        }
    },
    imageUrl: "https://image.tmdb.org/t/p/original/",
    
    movies: [],
    tv: []

});