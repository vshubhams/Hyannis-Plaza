# Project:- Clone of hyannisplazahotel.com
##### hyannisplazahotel.com is the official website of the Hyannis Plaza hotel. Our task was to clone this website with all it's major functionalities. We were able to achieve the desired result with all these major functionalities within 5 days.

### Demo - [Visit website](https://hyannisplaza.netlify.app/)

### Screenshots
#### Landing page-
![alt text](https://github.com/vshubhams/Hyannis-Plaza/blob/master/public/screenshots/Screenshot%20(491).png)
#### Rooms page-
![alt text](https://github.com/vshubhams/Hyannis-Plaza/blob/master/public/screenshots/Screenshot%20(493).png)
#### Booking page-
![alt text](https://github.com/vshubhams/Hyannis-Plaza/blob/master/public/screenshots/Screenshot%20(495).png)

### Team members:-
#### Digvijay Singh [View GitHub profile](https://github.com/digvijay30786)
#### Gaurav Parmar [View GitHub profile](https://github.com/Gaurav6291)
#### Shubham [View GitHub profile](https://github.com/vshubhams)
#### Ram singh  [View GitHub profile](https://github.com/ramsingh10497)
### Technologies used:
**ReactJs**
### Pages Designed:
Landing page, Rooms page, Booking page, Package page, and Policies page.
#### Library used:
Json-server, axios, material-ui, bootstrap, styled-components.

## How to run this project

In the project directory, you can run:

#1. install node modules `npm i`

#2. 
- Go to in src/Components/Redux/room/actions.js 
     - replace `process.env.REACT_APP_ROOMS_API_KEY` with `http://localhost:3001/rooms` in getRooms function

- Go to in src/Components/bookPage/BookPage.jsx
     - replace `process.env.REACT_APP_ROOMS_API_KEY` with `http://localhost:3001/rooms`
     - replace `process.env.REACT_APP_CONFIRM_BOOKING_API_KEY` with `http://localhost:3001/confirm_book`

#3. install json-server `npm install -g json-server`

#4. start json-server on port 3001

#4(a). split the terminal `ctrl+shift+5`

#4(b). start json-setver `json-server --watch db.json --port 3001`

#5. start react app `npm start`
