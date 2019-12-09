import React from 'react';

const Filters = () => {
  return (
    <div className="form-group row">
      <input className="form-control col-6" type="text" name="search" placeholder="Search by book name" />
      <select className="form-control col-3" name="price">
        <option value="all">all</option>
        <option value="from_0_to_15">{'0 < price > 15'}</option>
        <option value="from_15_to_30">{'15 < price > 30'}</option>
        <option value="more_than_30">{'price > 30'}</option>
      </select>
    </div>
  )
}

export default Filters;
