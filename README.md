# NodeJs Weather App

## Introduction

This is a basic app that fetches today's weather forecast from the location (city) you enter.

Note: You need a key from https://weatherstack.com/ and https://www.mapbox.com/.
Create an account on each website and get your api key and token.

## Usage

Fetch weather info by writing `node app "name of your city"`. If you want to provide a city name in more than one word you have to use double quotes around the input.

Example:

New York <--- No

"New York" <--- Yes

## Installation

1. clone the repo and run `npm install`

2. Open your terminal/commandprompt and locate the folder

3. In the source code locate the 'forecast.js' and add the api key you get from Weatherstack in the 'const apiKey'.

4. In the source code locate the 'geocode.js' and add the token you get from MapBox in the 'const token'.

5. Enter the name of the city you want the weather forecast for.
