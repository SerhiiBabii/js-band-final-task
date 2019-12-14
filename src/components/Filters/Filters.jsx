import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {showFilteredBooks} from '../../actions/actions';

const Filters = ({search, price, onChangeFilter}) => {
  return (
    <div className="form-group row">
      <input
        onChange={(e) => onChangeFilter(e.target.name, e.target.value)}
        value={search}
        className="form-control col-6"
        type="text"
        name="search"
        placeholder="Search by book name"
      />
      <select onChange={(e) => onChangeFilter(e.target.name, e.target.value)} value={price} className="form-control col-3" name="price">
        <option value="all">all</option>
        <option value="from_0_to_15">{'0 < price > 15'}</option>
        <option value="from_15_to_30">{'15 < price > 30'}</option>
        <option value="more_than_30">{'price > 30'}</option>
      </select>
    </div>
  )
}

Filters.propTypes = {
  search: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  search: state.books.filters.search,
  price: state.books.filters.price,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (name, value) => dispatch(showFilteredBooks(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
