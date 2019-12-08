import React, {useState} from 'react'
import PropTypes from 'prop-types'

const BookPrice = (props) => {
  const {level} = props;
  const [state, setstate] = useState(1);
  const maxBooks = 6;
  const level1 = level || 3; // for testing behavior

  return (
    <div className="border">
      <p className="row">
        <span className="col-8">Price, $</span>
        <span className="col-2">{level1}</span>
      </p>
      <div className="row">
        <span className="col-8">Count</span>
        <input
          className="col-2 rounded"
          value={state}
          type="number"
          name=""
          onChange={(e) => {
          if(e.target.value < 0){
            return 1
          }
          if(e.target.value > maxBooks) {
            return e.target.value
          }
          return setstate(e.target.value)
        }}
        />
      </div>
      <p className="row">
        <span className="col-8">Total price </span>
        <span className="col-2">{level1 * state}</span>
      </p>
      <div className="text-right">
        <button className="btn btn-secondary" type="button">Add to cart</button>
      </div>
    </div>
  )
}

BookPrice.defaultProps = {
  level: undefined,
}

BookPrice.propTypes = {
  level: PropTypes.number,
}

export default BookPrice
