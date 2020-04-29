const geocode = require('./utils/geocode');

const apiKey = '506dffb1bfa5251d1550b0dd5f7763fb'
const baseURL = 'http://api.weatherstack.com/'
const fullStaticURL = 'http://api.weatherstack.com/current?access_key=506dffb1bfa5251d1550b0dd5f7763fb&query=55.05982,10.60677'
//remove 'units=f' to convert units back to celcius
const myWeather = `${baseURL}/current?access_key=${apiKey}&query=55.05982,10.60677&units=f`

// axios.get(myWeather)
// .then(( response ) => {
//     if (response.data.error) {
//         const error = response.data.error;
//         console.log(`error code: ${error.code}`)
//         console.log(`error type: ${error.type}`)
//         console.log(`error info: ${error.info}`)
//     } else {
//     console.log(response.data.current)
//     console.log(`${response.data.current.weather_descriptions[0]}. It is currently ${response.data.current.temperature} degrees out. It feels like ${response.data.current.feelslike} degrees.`)
//     }
// })
// .catch(( error ) => {
//     console.log(error)
// })


// Geocoding
// Address -> Lat/Long -> Weather

const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxhcnNlbiIsImEiOiJjazlsOWI4NWswMmZoM21tdGZvaWk5a3FvIn0.aBWh-pC7cINpuAhHp3_lYw&limit=1'
const invalidURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/thefuckman.json?access_token=pk.eyJ1IjoiYWxhcnNlbiIsImEiOiJjazlsOWI4NWswMmZoM21tdGZvaWk5a3FvIn0.aBWh-pC7cINpuAhHp3_lYw&limit=1'

// axios.get(URL)
// .then(( response ) => {
//     // if the 'features' array is empty it means that the location can't be found
//     if (response.data.features.length === 0) {
//         console.log("Invalid search term. Can't find location. Try another")
//     } else {
//         const longitude = response.data.features[0].center[0]
//         const latitude = response.data.features[0].center[1]
//         console.log(`Long: ${longitude} - Lat: ${latitude}`)
//     }
// })
// .catch(( error ) => {
//     console.log("Error: Unable to connect to the service")
//     console.log(error)
// })



geocode('Copenhagen', (error, data) => {
    console.log('Error', error)
    console.log('Data:', data)
})