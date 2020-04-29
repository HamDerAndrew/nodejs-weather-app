const axios = require('axios');

const geocode = (address, callback) => {
    const token = 'pk.eyJ1IjoiYWxhcnNlbiIsImEiOiJjazlsOWI4NWswMmZoM21tdGZvaWk5a3FvIn0.aBWh-pC7cINpuAhHp3_lYw'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`

    axios.get(url)
    .then(( response ) => {
        if (response.data.features.length === 0) {
            // If an argument isn't provided for all of the callback function's arguments, JavaScript will return 'undefined' by default.
            // The code would work even without defining 'undefined', but in this case it's there to showcase it.
            callback("Invalid search term. Can't find location. Try another", undefined)
        } else {
            // now the address is undefined by default and we preceed to use the callback function to add data into an object.
            callback(undefined, {
                long: response.data.features[0].center[0],
                lat: response.data.features[0].center[1],
                location: response.data.features[0].place_name
            })
        }
    })
    .catch(( error ) => {
        callback('Unable to connect to the service', undefined)
        console.log(error)
    })
}

module.exports = geocode