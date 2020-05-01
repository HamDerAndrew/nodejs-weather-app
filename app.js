const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//grab userinput from commandline via process.argv
const userInput = process.argv[2]

if (!userInput) {
    console.log("Please provide an input")
} else {
    // In geocode.js. we know the callback function returns an object of data, which 
    // contains the properties 'lat', 'long' and 'location'. Instead of writing 'data.lat', 'data.long' etc. we destructure it with {}
    // We set the default value of the object '= {}' so that if an error is thrown, the function won't try to destructure an 'undefined'.
    geocode(userInput, (error, { lat, long, location } = {}) => {
        if (error) {
            //when using 'return' the code after that in the function is not executed, so we don't need an 'else' clause after the 'if'.
            return console.log(error)
        }
    
        //data.lat and data.long are the values found in geocode.js at line 16 and 17
        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return console.log(error.errorCode, error.errorType, error.errorInfo)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
}