import './css/styles.css';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import countryFetch from './js/fetchCountries';
import { renderCountryList, renderCountryCard } from './js/render';
import './js/pnotify';
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');


refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  event.preventDefault();
  clearMarkup();

  const searchQuery = refs.searchForm.elements.query.value;

  countryFetch
    .fetchCountries(searchQuery)
    .then(onFetchSucces)
    .catch(onFetchError)
    .finally(clearMarkup());
}

function onFetchSucces(data) {
  if (data.length === 1) {
    renderCountryCard(data);
    return;
  }
  if (data.length >= 1 && data.length <= 10) {
    renderCountryList(data);
    return;
  }
  onFetchError();
  clearMarkup();
  return;
}

function onFetchError() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}
function clearMarkup() {
  refs.cardContainer.innerHTML = '';
}
