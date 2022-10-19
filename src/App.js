import { useState } from 'react';
import Game from './game/Game';
import Authorisation from './Menu/authorisation';
import Server from './Menu/server';
import './App.css';


function AppMain({server}) {
  const [data, setData] = useState();
  return (
    <div className="App">
      {
        data && data.name ?
          <Game server={server} setData={(data) => setData(data)}/> :
          <Authorisation server={server} setData={(data) => setData(data)}/>
      }
    </div>
  );
}

function App() {
  const server = new Server();
  return (
    <>
      <AppMain server={server}/>
    </>
  )
}

export default App;
