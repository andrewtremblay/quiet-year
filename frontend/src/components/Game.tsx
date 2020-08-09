import React from 'react';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';
import { useStateWithLocalStorage } from '../utils/storage';
import Login from './Login';
import GameLobby from './GameLobby';

const LoadedGame = (props: {currentGame: string; currentUser: string}) => {
    const gameId = 'OmBd9g5qTk51AoPoCh8F';
    const {currentUser} = props;
    const currentUserRef = useFirestore().collection('users').doc(currentUser);
    const gameRef = useFirestore().collection('games').doc(gameId);
    const game: any = useFirestoreDocData(gameRef);
    return (<div>
       <div>
        {Object.keys(game).map(k => <p key={k}>{`${k + ':' + game[k]}`}</p>)}
      </div>
      <img 
        src="https://docs.google.com/drawings/d/e/2PACX-1vQeFwc3UmXx4KTy1Qpx7tuQAj_qIq_6a4yo1iuwHnCu_kVvzYCDyUdkWZiU7uJHcw16V5GztJL9Xqnj/pub?w=1440&amp;h=1080"
        ></img>
        </div>
    );
}

function Game() {
  const [currentGame, setCurrentGame] = useStateWithLocalStorage('currentGame');
  const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser');
  // lazy load the Firestore SDK and create a document reference
  if (currentUser === '') {
    return <Login />
  }
  if (currentGame === '') {
    return <GameLobby />
  }

  // subscribe to the doc. just one line!
  return <LoadedGame 
    currentUser={currentUser}
    currentGame={currentGame}
  />;
}


export default Game;