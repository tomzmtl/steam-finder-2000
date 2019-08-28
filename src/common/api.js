// move to ENV variable
const API_URL = 'https://steam-finder-api.herokuapp.com';
// const API_URL = 'http://localhost:9000';


// Fetch a player base profile
export const fetchPlayer = (playerId) => {
  return fetch(`${API_URL}/players/${playerId}`)
    .then(response => response.json())
    .catch();
}
