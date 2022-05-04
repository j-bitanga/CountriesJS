import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import axios from 'axios'

axios
    .get('https://restcountries.com/v3.1/all')
    .then (response => {
    const countries = response.data
    ReactDOM.render(<App/>, document.getElementById('root'))
    console.log(countries)
})
