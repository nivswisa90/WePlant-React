import React, { useState } from 'react';
import PlantResult from './plantResult';
import axios from 'axios';

const SearchPlant = () => {
  const [result, setResult] = useState(false);
  const [plantName, setPlantName] = useState({
    name: ''
  });

  // const getPlants = () => {
  //   axios.get(`https://weplants.herokuapp.com/api/plants?name=${plantName}`);
  // }

  const handleChange = e => {
    const { name, value } = e.target;
    setPlantName({
      ...plantName,
      [name]: value
    });
    console.log(plantName);
  };

  return (
    <div>
      <div className="row no-gutters">
        <div className="col-12">
          <h2 id="recent">Search Plants</h2>
          <div className="form-inline my-2 my-lg-0">
            <input
            className="form-control mr-sm-2"
            type="search"
            name='name'
            placeholder='Search'
            value={plantName.name}
            onChange={handleChange}
            aria-label="Search" />
            <button id="get-query-search" className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
          <p id="possible-error">There is no results</p>
        </div>
      </div>
      <PlantResult />
    </div>

  )
};
export default SearchPlant;