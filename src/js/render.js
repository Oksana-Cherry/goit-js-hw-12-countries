  
import refs from './refs';
import countryCard from '../templates/country.hbs';
import countryList from '../templates/listCountry.hbs';

export function renderCountryList(countries) {
  const markup = countryList(countries);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderCountryCard(country) {
  const markup = countryCard(country);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}