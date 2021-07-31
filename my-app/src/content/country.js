function Country(prop) {
    return(
        <div className="country">
            <img src={prop.flag}/>
            <div className="info">
                <div className="countryName">{prop.name}</div>
                <p><b>Population:</b> {prop.population}</p>
                <p><b>Region:</b> {prop.region}</p>
                <p><b>Capital:</b> {prop.capital}</p>
            </div>

        </div>
    )
}

export default Country;