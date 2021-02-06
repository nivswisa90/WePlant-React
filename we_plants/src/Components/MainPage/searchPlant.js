import React, { useEffect, useState } from 'react';
import PlantResult from './plantResult';
import axios from 'axios';

const SearchPlant = () => {
  const [result, setResult] = useState('');
  const [plantName, setPlantName] = useState({
    name: ''
  });

  const getPlants = () => {
    axios.get(`https://weplants.herokuapp.com/api/plants?name=${plantName.name}`)
    .then(docs =>{
      setResult(result => [...result, docs.data]);
    })
    .catch(err => console.log(err));
    console.log(result);
  }


  const handleChange = e => {
    const { name, value } = e.target;
    setPlantName({
      ...plantName,
      [name]: value
    });
  };

  const handleSubmit = () => {
    getPlants();
    // console.log(result);
    // result? <PlantResult/>:<h1>No result</h1>
  }

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
            <button id="get-query-search" className="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick={handleSubmit}>
              Search
            </button>
          </div>
          <p id="possible-error">There is no results</p>
        </div>
      </div>
    </div>

  )
};
export default SearchPlant;