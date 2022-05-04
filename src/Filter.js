import React from 'react'

const Filter = (props) => {
    var filteredCountries = props.filteredCountries
    var setFilteredCountries = props.setFilteredCountries

return (
    <div>
        Search for a country: <input type="text" onChange={e => setFilteredCountries(e.target.value.toLocaleLowerCase())} value={filteredCountries}></input>
    </div>
)


}

export default Filter