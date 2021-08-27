import './App.css';
// import Package from './Packages/Package';
// import { RoomsPage } from './RoomsPage/RoomsPage';
// import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';

import Routing from './Routing/Routing';
// import { RoomsPage } from './RoomsPage/RoomsPage';

function App() {

  const [load, setload] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setload(true);
    }, 3000);
  }, []);


  return load ? (
    <div className="App">
      <Routing/>
      {/* <Package /> */}
      {/* <RoomsPage /> */}
    </div>
  ):(<Loader className="Loader" type="ThreeDots" color="#3d9991" secondaryColor='red' height={120} width={120} timeout={3000}/>);
}

export default App;
