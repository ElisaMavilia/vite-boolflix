import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/movie'
    },
    options:{
        params: {
            api_key: 'fef663df583834922ff3702dcfcbbcb6',
            query: ''
        }
    },
    searchList: []

});