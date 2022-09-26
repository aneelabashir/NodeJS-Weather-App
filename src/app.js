const path = require('path');
const express = require('express');
const { hasSubscribers } = require('diagnostics_channel');
const forcast = require('./forcast.js')


const app = express();

const publicDirpath = path.join(__dirname, '../public');

app.use(express.static(publicDirpath))

app.set('view engine', 'hbs')


app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    const city = req.query.city;
    let ab ;
    let err;
    forcast(city , (error , result) => {
        console.log(result);
        if(error)
        {
            return res.send( 'error : ' + error)
        }       
        res.send(result);
    }); 
})

app.get('', (req, res) => {
    res.render('index', {
        'title' : 'Weather',
        'location': 'Lahore'
    })
   
})
app.get('*', (req, res) => {
    res.send('404 not found!!')
})

app.listen(3000, () => {
    console.log('Express server is running');
})

