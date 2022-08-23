import axios from 'axios';


const URL = "https://api.themoviedb.org/3/";
const API_KEY = "1563b0802f0d70ed125e7107a68b9842";

export const fetchMovies = async (search, movies) => {
  //console.log('fetch movies', search);
  if (!search) {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return [...movies, ...response.data.results];
  } else {
    console.log('in else');
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    );
    return [...response.data.results];
  }
};

export const fetchCredits =async (id) => {
  const response = await axios.get(`${URL}movie/${id}/credits?api_key=${API_KEY}`)
    console.log(response.data.crew);

    const director = response.data.crew.find(
      (dir) => dir.known_for_department === 'Directing'
    );
    const credits = response.data;
    return { director: director, credits: credits };
  
};
