import './App.css';
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';

import Routing from './Routes/Routes';

function App() {

  const [load, setload] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 1000);
  }, []);


  return load ? (
    <div className="App">
      <Routing/>
    </div>
  ):(<Loader className="Loader" type="ThreeDots" color="#3d9991" secondaryColor='red' height={120} width={120} timeout={3000}/>);
}

export default App;
