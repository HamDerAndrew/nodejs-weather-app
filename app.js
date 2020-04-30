const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//grab userinput from commandline via process.argv
const userInput = process.argv[2]

if (!userInput) {
    console.log("Please provide an input")
} else {
    geocode(userInput, (error, data) => {
        if (error) {
            //when using 'return' the code after that in the function is not executed, so we don't need an 'else' clause after the 'if'.
            return console.log(error)
        }
        console.log('Error', error)
        console.log('Data:', data)
        console.log("===== geocode end =====")
    
        //data.lat and data.long are the values found in geocode.js at line 16 and 17
        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
          })
    })
}