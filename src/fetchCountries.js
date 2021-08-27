function fetchCountries(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
}
export default fetchCountries;
