import React from 'react'

const Country = (props) => {
    
var country = props.showDetails

return (
    <div>
        
        <p>
            {console.log(country)}
                  <b>{country.name.common}</b><br></br>
                  Capital: {country.capital}<br></br>
                  Languages:
                  {Object.keys(country.languages).map((keyName, i) => (
                    
                      <li key={i}>
                      {country.languages[keyName]}
                        </li>
                   
                  ))}
                  Flag:<br></br>
                  <img src={country.flags.png}/><br></br>
                  <b>Weather in {country.name.common}</b>
                    


                </p>
       
    </div>
)


}

export default Country