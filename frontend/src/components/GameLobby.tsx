import React from 'react';
import { useFirestoreCollectionData, useFirestore, SuspenseWithPerf} from 'reactfire';
import { useStateWithLocalStorage } from '../utils/storage';
import { newGameInfo } from '../utils/game';

function GameLobby() {
    const [currentGame, setCurrentGame] = useStateWithLocalStorage('currentGame');
    const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser');

    const [loading, setLoading] = React.useState(false); 
    const fireStoreSdk = useFirestore();
    // lazy load the Firestore SDK and create a document reference
    const gamesRef = fireStoreSdk.collection('games');
    // useFirestoreCollectionData

    const onNewGame = async () => {
        setLoading(true);
        const gameAddResult = await fireStoreSdk
           .collection('games').add(newGameInfo(
               currentUser,
               'https://docs.google.com/drawings/d/1RjOVTLLzSyPIu3c0rQwLLhzBefgAza4PgbEd0byliJ8/edit?usp=sharing'
            )
        );
   
        setCurrentGame(gameAddResult.id);
        setLoading(false);
    };

    const onSelectGame = (gameId: string) => {
        setCurrentGame(gameId);
    };

    return (
    <div>
        Game Lobby
        {loading && 'Loading'}
    </div>);
}  

export default GameLobby;