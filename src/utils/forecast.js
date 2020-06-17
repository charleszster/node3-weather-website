const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d2e768aa25523b5c398d841d222e13f&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.  Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ".  The temperature is " + body.current.temperature + " degrees out.  There is a " + body.current.precip + "% chance of rain.")
        }
    })
}

module.exports = forecast