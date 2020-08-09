import React from 'react';
import './App.css';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';
function Game() {
  // lazy load the Firestore SDK and create a document reference
  const gameRef = useFirestore()
    .collection('games')
    .doc('OmBd9g5qTk51AoPoCh8F');

  // subscribe to the doc. just one line!
  const game: any = useFirestoreDocData(gameRef);

  return <p>{`${Object.keys(game)}`}</p>;
}

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
