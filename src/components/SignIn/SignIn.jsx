import React from 'react'

const SignIn = () => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <div>
          <img className="border" height="250" src="images/defaultAvatar.png" alt="avatar" />
        </div>
        <div className="m-2">
          <label htmlFor="username">
            <p className="mb-0"><b>Username</b></p>
            <input className="col-12" type="text" name="username" id="username" placeholder="type Username" />
          </label>
        </div>
        <div>
          <button className="col-2" type="button">Sign-In</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
