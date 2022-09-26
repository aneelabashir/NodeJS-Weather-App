const request = require('request');

const forcast = (city, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=9bb5ee1150bbba21297796058abf6285&query=' + city;

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Error from the weatherstack Api!!', undefined)
        } else if (response.body.error) {
            callback('Error from the weatherstack Api!!', undefined)

        } else {
           // callback(undefined,'Its currently ' + response.body.current.temperature + ' degrees out and feels like ' + response.body.current.temperature + ' degrees.');
            callback(undefined, response.body.current);
       
        }
    })
}

module.exports = forcast