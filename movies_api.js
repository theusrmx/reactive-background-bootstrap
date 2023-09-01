const apiKey = '557439512040e55c35f758f339c8e1d1';

const mediaType = 'movie'; // Altere para 'tv' para buscar detalhes de uma série
const mediaId = 346698; // Substitua pelo ID do filme ou série desejada
const apiUrl = `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apiKey}&language=pt-BR&append_to_response=genres`;

async function fetchMediaDetails() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const title = data.title || data.name; //nome
    const posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`; //poster
    const views = data.popularity; //views do filme
    const likes = data.vote_count; //coraçoes/like
    const overview = data.overview;//sinopse
    const duration = data.runtime || data.episode_run_time?.[0] || 'N/A'; //duração
    const genre = data.genres?.[0]?.name || 'N/A'; //genero
    const releaseYear = (data.release_date || data.first_air_date)?.substring(0, 4) || 'N/A'; //data de lançamento
    const rating = data.vote_average.toFixed(1); //nota do filme

    

    document.getElementById('movie-title').textContent = title;
    document.getElementById('movie-poster').src = posterUrl;
    document.getElementById('views').textContent = views;
    document.getElementById('likes').textContent = likes;
    document.getElementById('sinopse').textContent = overview;
    document.getElementById('duration').textContent = `${duration} min`;
    document.getElementById('genre').textContent = genre;
    document.getElementById('release-year').textContent = releaseYear;
    document.getElementById('rating').textContent = rating;


  } catch (error) {
    console.error('Erro ao buscar detalhes:', error);
  }
}

window.onload = fetchMediaDetails;
