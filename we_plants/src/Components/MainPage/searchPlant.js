import React, { useState } from "react";
import axios from "axios";
import PlantResult from './plantResult';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const SearchPlant = ({ userInfo }) => {
  // const userInfo = props.userInfo.props.location.state;
  const [result, setResult] = useState("");
  const [plantName, setPlantName] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantName({
      ...plantName,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3000/api/plants?name=${plantName.name}`, {
        withCredentials: true,
      })
      .then((docs) => {
        setResult(docs.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="no-gutters">
      <div className="col-12">
        <h2 id="recent">Search Plants</h2>
        <div >
          <TextField id="outlined-basic"
            className="search-form"
            label="Search"
            variant="outlined"
            type="search"
            name="name"
            value={plantName.name}
            onChange={handleChange}
          />
          <div className="search-button">
            <Button id="get-query-search" onClick={handleSubmit} variant="outlined" color="primary" type="submit">
              Search
            </Button>
          </div>
        </div>
        {!result ? <p></p> : <PlantResult result={result} userId={userInfo.id} />}
      </div>
    </div>
  );
};
export default SearchPlant;
