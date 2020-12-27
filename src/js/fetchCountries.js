  

const baseUrl = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(searchQuery) {
  return fetch(`${baseUrl}/${searchQuery}`).then(res => res.json());
}

export default { fetchCountries };
