import React, {useState} from 'react'
import PropTypes from 'prop-types'

const BookPrice = ({price, maxBooks}) => {
  const [state, setstate] = useState(1);

  return (
    <div className="border p-2">
      <p className="row">
        <span className="col-8">Price, $</span>
        <span className="col-2">{price}</span>
      </p>
      <div className="row">
        <span className="col-8">Count</span>
        <input
          className="col-3 rounded pl-2 pr-0"
          value={state}
          type="number"
          name="countInput"
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
        <span className="col-2">{(price * state).toFixed(2)}</span>
      </p>
      <div className="text-right">
        <button disabled={state < 1} className="btn btn-secondary" type="button">Add to cart</button>
      </div>
    </div>
  )
}

BookPrice.propTypes = {
  price: PropTypes.number.isRequired,
  maxBooks: PropTypes.number.isRequired,
}

export default BookPrice
