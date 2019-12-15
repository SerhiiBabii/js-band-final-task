import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signIn} from '../../actions/actions';
import CallApi from '../../api/api';

const fetchFOrSignin = (name, func) => {
  CallApi.post('/signin', {
    username: name,
  }).then((data) => {
    const {username, avatar, token} = data;
    func(username, avatar, token);
  })
}

const SignIn = ({user, signInUser}) => {
  const [inputText, setstateInput] = useState('');
  const [errorText, setstateError] = useState('error');

  if(user.username) {
    return <Redirect to="/books" />
  }

  return (
    <div className="row">
      <div className="col-12 text-center">
        <div>
          <img className="border" height="250" src="images/defaultAvatar.png" alt="avatar" />
        </div>
        <div className="m-2">
          <label htmlFor="username">
            <p className="mb-0"><b>Username</b></p>
            <input
              value={inputText}
              onChange={(e) => {
                setstateInput(e.target.value);
                if(e.target.value.length < 4 || e.target.value.length > 16) {
                  setstateError('error');
                } else {
                  setstateError('');
                }
              }}
              className="col-12"
              type="text"
              name="username"
              id="username"
              placeholder="type Username"
            />
          </label>
          {/* {errorText ? <p className="text-danger">Field is not valid</p> : null} */}
        </div>
        <div>
          <button onClick={() => fetchFOrSignin(inputText, signInUser)} disabled={!!errorText} className="col-2" type="button">Sign-In</button>
        </div>
      </div>
    </div>
  )
}

SignIn.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  signInUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.books.user,
})

const mapDispatchToProps = (dispatch) => ({
  signInUser: (username, avatar, token) => dispatch(signIn(username, avatar, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
