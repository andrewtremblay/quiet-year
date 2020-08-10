import React from 'react';
import './App.css';
import { SuspenseWithPerf } from 'reactfire';
import Game from './components/Game';
import Login from './components/Login';
import GameLobby from './components/GameLobby';
import { useStateWithLocalStorage } from './utils/storage';

function App() {
  const [currentGame, setCurrentGame] = useStateWithLocalStorage('currentGame');
  const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser');
  // lazy load the Firestore SDK and create a document reference
  if (currentUser === '') {
    return <Login 
    currentGame={currentGame}
    setCurrentGame={setCurrentGame}
    currentUser={currentUser}
    setCurrentUser={setCurrentUser}
    />
  }
  if (currentGame === '') {
    return (
    <SuspenseWithPerf
      fallback={'loading games...'}
      traceId={'load-games'}
    >
    <GameLobby
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        />
    </SuspenseWithPerf>);

  }


  return (
    <div className="App">
      {/*
        SuspenseWithPerf behaves the same as Suspense,
        but also automatically measures load times with the User Timing API
        and reports it to Firebase Performance Monitoring
      */}
      <SuspenseWithPerf
        fallback={'loading game status...'}
        traceId={'load-game'}
      >
        <Game 
            currentGame={currentGame}
            currentUser={currentUser}
            setCurrentGame={setCurrentGame}
            setCurrentUser={setCurrentUser}
        />
      </SuspenseWithPerf>
    </div>
  );
}

export default App;
