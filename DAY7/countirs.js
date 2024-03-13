// Fetch data from the provided URL
/*fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter out countries from the Asian continent/region
    const asianCountries = data.filter(country => {
      return country.region === 'Asia' || country.subregion === 'Asia';
    });

    // Log the names of the Asian countries
    const asianCountryNames = asianCountries.map(country => country.name.common);
    console.log('Asian Countries:', asianCountryNames);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/

  // Fetch data from the provided URL
/*fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Filter out countries with population less than 200,000
  const countriesWithLowPopulation = data.filter(country => {
    return country.population < 200000; // Assuming 1 lakh = 100,000
  });

  // Log the names of the countries with low population
  const countryNamesWithLowPopulation = countriesWithLowPopulation.map(country => country.name.common);
  console.log('Countries with population less than 2 lakh:', countryNamesWithLowPopulation);
})
.catch(error => {
  console.error('Error fetching data:', error);
});*/

//3 PRINT THE FOLLOWING DEATILS SUCH AS CAPITL,FLAG, USING FOR OF FUNCTION//

// Fetch data from the provided URL
/*fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and print name, capital, and flag
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg); // Assuming you want SVG flag URLs
      console.log('---'); // Separator between countries
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/

  //PRINT THE COUNTRY THAT USES USING US DOLARS//

  // Fetch data from the provided URL
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Filter countries that use US dollars
  const usDollarCountries = data.filter(country => {
    return country.currencies && country.currencies.USD;
  });

  // Print the names of countries that use US dollars
  usDollarCountries.forEach(country => {
    console.log(country.name.common);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});







