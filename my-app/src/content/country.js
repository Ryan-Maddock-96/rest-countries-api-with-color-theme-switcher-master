function Country(prop) {
    return(
        <div className="country">
            <img src={prop.flag}/>
            <div className="info">
                <div>{prop.name}</div>
                <div><b>Population:</b> {prop.population}</div>
                <div><b>Region:</b> {prop.region}</div>
                <div><b>Capital:</b> {prop.capital}</div>
            </div>

        </div>
    )
}

export default Country;