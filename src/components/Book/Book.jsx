import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import BookPrice from './BookPrice';

export default class Book extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    }
  }

  render() {
    const {
      movie:{
        title,
        author,
        level,
        description,
        cover,
        tags,
      },
    } = this.state;
    const posterImage = cover || './images/imageNotFound.png';
    return (
      <div className="m-3">
        <div className="row">
          <img className="col-4" src={posterImage} alt="poster" />
          <div className="col-4">
            <p>
              Book name:
              {' '}
              {title}
            </p>
            <p>
              Book author:
              {' '}
              {author}
            </p>
            <p>
              Book level:
              {' '}
              {level}
            </p>
            <p>
              Book tags:
              {' '}
              {tags}
            </p>
          </div>
          <div className="col-4">
            <BookPrice />
          </div>
        </div>
        <p>
          Description: 
          {description}
        </p>
      </div>
    )
  }
}
