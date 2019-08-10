//dependencies
const axios = require("axios");

//api id and key stored as environment variables
const NUMBEO_APP_KEY = process.env.NUMBEO_APP_KEY;

// baseURL of the website.
const baseURLIndices = "https://www.numbeo.com/api/indices";
const baseURLPrices = "https://www.numbeo.com/api/city_prices";

const usefulMeasures = [
  "Monthly Pass (Regular Price), Transportation",
  "Meal, Inexpensive Restaurant, Restaurants",
  "Apartment (1 bedroom) in City Centre, Rent Per Month",
  "Apartment (1 bedroom) Outside of Centre, Rent Per Month",
  "Apartment (3 bedrooms) in City Centre, Rent Per Month",
  "Apartment (3 bedrooms) Outside of Centre, Rent Per Month",
  "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment, Utilities (Monthly)",
  "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL), Utilities (Monthly)",
  "Average Monthly Net Salary (After Tax), Salaries And Financing"
];

module.exports.getIndicesByLocation = getIndicesByLocation;
module.exports.getPricesByLocation = getPricesByLocation;

//function that allows you to find indices for a city by its latitude and longitude
async function getIndicesByLocation(longitude, latitude) {
  let params = {
    api_key: NUMBEO_APP_KEY,
    query: `${longitude},${latitude}`
  };

  try {
    let response = await axios.get(baseURLIndices, { params: params });
    if (response.status == 200) {
      let {
        name,
        quality_of_life_index,
        rent_index,
        crime_index,
        health_care_index
      } = response.data;

      //name has city name and country name separated by a comma. We need it splitted

      let city_and_nation_splitted = name.split(", ")
      name = city_and_nation_splitted[0];
      let city = city_and_nation_splitted[1];

      let indices = {
        city: name,
        country: city,
        longitude: longitude,
        latitude: latitude,
        quality_of_life_index: quality_of_life_index,
        rent_index: rent_index,
        crime_index: crime_index,
        health_care_index: health_care_index
      };

      return indices;
    }
  } catch (err) {}
}

//function that allows you to find indices for a city by its latitude and longitude
async function getPricesByLocation(longitude, latitude) {
  let params = {
    api_key: NUMBEO_APP_KEY,
    query: `${longitude},${latitude}`
  };

  try {
    let response = await axios.get(baseURLPrices, { params: params });
    if (response.status == 200) {
      let prices = response.data.prices;
      let refinedPrices = [];

      prices.forEach(price => {
        if (usefulMeasures.includes(price.item_name)) {
          refinedPrices.push({
            item: price.item_name,
            price: price.average_price
          });
        }
      });

      return refinedPrices;
    }
  } catch (err) {}
}
