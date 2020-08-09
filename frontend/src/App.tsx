import React from 'react';
import './App.css';
import { SuspenseWithPerf } from 'reactfire';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      {/*
        SuspenseWithPerf behaves the same as Suspense,
        but also automatically measures load times with the User Timing API
        and reports it to Firebase Performance Monitoring
      */}
      <SuspenseWithPerf
        fallback={'loading game status...'}
        traceId={'load-game-status'}
      >
        <Game />
      </SuspenseWithPerf>
    </div>
  );
}

export default App;
