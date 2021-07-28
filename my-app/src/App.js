
import {useEffect, useState} from "react";
import HeaderEl from './content/Header';
import Actions from './content/Actions';
import Country from "./content/country";
function App() {

  const [allData, getData] = useState([]);
  const [filteredData, getFilteredData] = useState(allData);

  useEffect(() => {
    fetchData();
    }, []);
  
    const fetchData = () => {
      return fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json())
            .then((data) => { 
              getData(data);
              getFilteredData(data);
            }
             );}
  return (
    <div className="container">
      <HeaderEl />
      <div className="content">
        <Actions allData={allData} getFilteredData={getFilteredData} />
        <div className="countryContainer">
          {
          filteredData.length > 0 ? filteredData.map(item => <Country flag={item.flag} name={item.name} population={item.population} region={item.region} capital={item.capital}/>) : <div>No results found</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
