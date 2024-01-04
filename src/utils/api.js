import axios from "axios";
const BASE_URL='https://api.themoviedb.org/3';
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjU3ZDBlYjFkZGI1NzA4OGQwMGYyMzNmYTIxMDI3NCIsInN1YiI6IjY1N2M5MzI3ZWM4YTQzMDBjMzNiYzY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sItr2EQqN1gYzqMDfhahV62t08hPQh__C_UjGmO7uXg"
const headers={
    Authorization:'Bearer '+TMDB_TOKEN,
}
export const fetchDataFromApi=async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}