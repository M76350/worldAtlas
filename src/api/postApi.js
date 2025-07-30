
import axios from "axios";
// axios.create({
//     // https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags
//     baseURL:"https://restcountries.com/v3.1"
// });

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
    
})
// https get method
export const getCountryData =()=>{
    return  api.get("/all?fields=name,population,region,capital,flags")
}

// Https get methid for the indivisula .country name

export const getCountryIndivisualData = (name) => {
    return api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
  };