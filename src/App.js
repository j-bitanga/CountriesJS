import React, { useState, useEffect, Children } from 'react'
import axios from 'axios'
import Filter from './Filter'
import List from './List'

const App = () => {

  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState('')
  const [countries, setCountries] = useState([])

  useEffect (() => {
    console.log('initial effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setAllCountries(response.data)
      console.log(allCountries)
    })
  }, [])
  
  setAllCountries(allCountries.filter(c => c.name.common.toLocaleLowerCase().includes(filteredCountries)))
  

  return (
    <div>
    <Filter setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
    <List countries={allCountries} setCountries={setAllCountries}/>
    {console.log(allCountries)}
    </div>
    
  )

}



export default App