import React, { useState, useEffect, Children } from 'react'
import axios from 'axios'
import Filter from './Filter'
import List from './List'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState('')

  useEffect (() => {
    console.log('initial effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
      console.log(countries)
    })
  }, [])
  
  
  const displayCountry = countries.filter(c => c.name.common.toLocaleLowerCase().includes(filteredCountries))

  return (
    <div>
    <Filter setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
    <List displayCountry={displayCountry}/>
    {console.log(displayCountry)}
    </div>
    
  )

}



export default App