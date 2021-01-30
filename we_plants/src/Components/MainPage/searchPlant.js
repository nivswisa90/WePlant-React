import React from 'react';

const SearchPlant = () => {
    return (
        <div class="row no-gutters">
        <div class="col-12">
          <h2 id="recent">Search Plants</h2>
          <div class="form-inline my-2 my-lg-0">
            <input id="query-value" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button id="get-query-search" class="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
          <p id="possible-error">There is no results</p>
        </div>
      </div>
    //   <section id="table-data"></section>

    )
};
export default SearchPlant;