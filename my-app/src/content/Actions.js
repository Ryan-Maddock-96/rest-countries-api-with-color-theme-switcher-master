import {BiChevronDown} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';

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
            <div className="search">
                <div className="inputHolder">
                    <AiOutlineSearch class="searchIcon" />
                    <input type="text" id="searchInput" placeholder="Search for a country..." onInput={handleFilter}/>
                </div>

            </div>
            <div className="regionFilter">
                <div className="inputHolder">
                    <select id="filterDDL" onChange={handleFilter}>
                        <option value="All">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <BiChevronDown className="ddlIcon"/>
                </div>

            </div>

        </div>
    ) 
}

export default Actions;