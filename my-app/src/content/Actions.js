
function Actions(prop) {

    const handleFilter = (e) => {       
        if (e.target.value != "All") {
            prop.getFilteredData(prop.allData.filter(data => data.region.toLowerCase() == e.target.value.toLowerCase()))
        }else {
            prop.getFilteredData(prop.allData);
        }
    }

    return (
        <div className="actions">
            <input type="text"/>
            <select onChange={handleFilter}>
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    ) 
}

export default Actions;