import React from 'react'

const HeaderUser = () => {
  return (
    <div>
      <img height="40" src="./images/cart.svg" alt="cart" />
      <button type="button" className="btn btn-primary m-2">Sing-Out</button>
      <img height="40" className="m-2 rounded-circle" src="" alt="avatar" />
      <span>Username</span>
    </div>
  )
}

export default HeaderUser;