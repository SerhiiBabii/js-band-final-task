[![Build Status](https://travis-ci.org/SerhiiBabii/js-band-final-task.svg?branch=master)](https://travis-ci.org/SerhiiBabii/js-band-final-task)

# Final task

## Before launching the project it is necessary:

- _Make sure that the **node.js** and **npm** are set. To do this, just write in the terminal._

  > node -v

  If you see a version, for example, "v10.15.1" then everything is okay.

## Instructions for launching the project:

- _Clone this repository_

  > git clone https://github.com/SerhiiBabii/js-band-final-task.git

- _Change directory to project directory and install all dependencies:_

  > cd js-band-final-task

- Run the **"npm i"** command in the terminal. This command will install all the packages that are specified in the **packege.json** file, as well as all their dependencies.

  > npm i

- _Run project:_
  > npm start

## Looking project:

You can see project page:

- The first method. Go to next pages:

  > http://localhost:3000/

- The second method:

  > https://serhiibabii.github.io/js-band-final-task/

## Structure of the project:
```
├── public
│   ├── imgages
│   │   ├── cart.svg
│   │   ├── ciklum-logo.png
│   │   ├── defaultAvatar.png
│   │   ├── error404.jpg
│   │   └── imageNotFound.png
│   └── index.html
├── src
│   ├── actions
│   │   ├── actions.js
│   │   └── actionTypes.js
│   ├── api
│   │   └── api.js
│   ├── components
│   │   ├── Book
│   │   │   ├── Book.jsx
│   │   │   └── BookPrice.jsx
│   │   ├── BooksList
│   │   │   ├── BookItem.jsx
│   │   │   └── BookList.jsx
│   │   ├── Cart
│   │   │   ├── Cart.jsx
│   │   │   ├── CartEmpty.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartTable.jsx
│   │   │   └── CartTotalPrice.jsx
│   │   ├── Filters
│   │   │   └── Filters.jsx
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   └── HeaderUser.jsx
│   │   ├── NotFound
│   │   │   └── NotFound.jsx
│   │   ├── PrivateRoute
│   │   │   └── PrivateRoute.jsx
│   │   └── SignIn
│   │       └── SignIn.jsx
│   ├── filters
│   │   ├── filterForPrice.js
│   │   └── filterForTitle.js
│   ├── localStorage
│   │   └── localStorage.js
│   ├── reducers
│   │   ├── additionFunctions
│   │   │   ├── updateCartItem.js
│   │   │   ├── updateCartItems.js
│   │   │   ├── updateOrder.js
│   │   │   └── updateTotalPrice.js
│   │   ├── books.js
│   │   └── reducers.js
│   └── spinner.js
│       ├── spinner.css
│       └── spinner.jsx
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .travis.yml
├── package-lock.json
├── package.json
└── README.md
```