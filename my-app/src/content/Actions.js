function Actions(prop) {

    const handleFilter = () => { 
        const filterDDL = document.getElementById('filterDDL');
        const searchInput = document.getElementById('searchInput');

        // Reset the current list to all data
         prop.getFilteredData(prop.allData);

        if (filterDDL.value != "All" && searchInput.value != "") {

            // Filter by region
            prop.getFilteredData(prop.allData.filter(data => data.region.toLowerCase() == filterDDL.value.toLowerCase()))

            // then filter by the Search Text
            prop.getFilteredData( filteredByRegion => filteredByRegion.filter(item => item.name.toLowerCase().includes(searchInput.value)))

        } else if (filterDDL.value != "All" && searchInput.value == "") {
            // Filter by Region if there is no search text
            prop.getFilteredData(prop.allData.filter(data => data.region.toLowerCase() == filterDDL.value.toLowerCase()))
        } else if (filterDDL.value == "All" && searchInput.value != "") {
            // Filter by Search Text if there is no Region selected
            prop.getFilteredData(prop.allData.filter(item => item.name.toLowerCase().includes(searchInput.value)))
        }
    }

    return (
        <div className="actions">
            <input type="text" id="searchInput" onInput={handleFilter}/>
            <select id="filterDDL" onChange={handleFilter}>
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