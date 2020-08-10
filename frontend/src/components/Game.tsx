import React from 'react';
import { useFirestoreDocData, useFirestore} from 'reactfire';

const Game = (props: any) => {
    const {
        currentUser, setCurrentUser,
        currentGame, setCurrentGame
     } = props;
    const currentUserRef = useFirestore().collection('users').doc(currentUser);
    const gameRef = useFirestore().collection('games').doc(currentGame);
    const game: any = useFirestoreDocData(gameRef);
    return (<div>
        <button onClick={() => setCurrentGame('')}>Leave Game</button>
        <button onClick={() => setCurrentUser('')}>Log Out</button>
       <div>
        {Object.keys(game).map(k => <p key={k}>{`${k + ':' + game[k]}`}</p>)}
      </div>
      <img 
        src="https://docs.google.com/drawings/d/e/2PACX-1vQeFwc3UmXx4KTy1Qpx7tuQAj_qIq_6a4yo1iuwHnCu_kVvzYCDyUdkWZiU7uJHcw16V5GztJL9Xqnj/pub?w=1440&amp;h=1080"
        ></img>
        </div>
    );
}


export default Game;