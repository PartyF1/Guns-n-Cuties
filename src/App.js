import Game from './game/Game';
import Authorisation from './Menu/authorisation';
import { useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      {
        !data ?
          <Authorisation setData={(data) => setData(data)}></Authorisation> :
          <Game></Game>
      }
    </div>
  );
}

export default App;
