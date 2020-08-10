import React, { useEffect } from "react";
import { useFirestore } from "reactfire";
import { newGameInfo } from "../utils/game";

function GameLobby(props: any) {
  const { currentGame, setCurrentGame, currentUser, setCurrentUser } = props;
  const [games, setGames] = React.useState<any[]>([]);

  const [loading, setLoading] = React.useState(false);
  const fireStoreSdk = useFirestore();
  const gamesRef = fireStoreSdk.collection("games");
  // lazy load the Firestore SDK and create a document reference
  useEffect(() => {
    (async () => {
      setLoading(true);
      const gamesSnapshot = await gamesRef.get();
      let games: any[] = [];
      gamesSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        games.push({ ...doc.data(), game_id: doc.id });
      });
      setGames(games as any[]);
      setLoading(false);
    })();
  }, [currentUser]);

  const onNewGame = async () => {
    setLoading(true);
    const gameAddResult = await gamesRef.add(
      newGameInfo(
        currentUser,
        "https://docs.google.com/drawings/d/1RjOVTLLzSyPIu3c0rQwLLhzBefgAza4PgbEd0byliJ8/edit?usp=sharing"
      )
    );
    await gameAddResult.set({ game_id: gameAddResult.id });
    setCurrentGame(gameAddResult.id);
    setLoading(false);
  };

  const onJoinGame = async (gameId: string) => {
    setLoading(true);
    const game = await gamesRef.doc(gameId).get();
    if (game) {
      const data = game.data() || {};
      const currentPlayers = data?.player_ids || [];
      if (!currentPlayers.find((pId: any) => pId === currentUser)) {
        await gamesRef
          .doc(gameId)
          .set({ ...data, player_ids: [...currentPlayers, currentUser] });
      } else {
        console.warn("already joined");
      }
    }
    setCurrentGame(gameId);
    setLoading(false);
  };

  return currentGame ? (
    <div>
      <p>Already in a game! Rejoining.</p>
    </div>
  ) : (
    <div>
      Active Games
      {loading && "Loading"}
      {games.map((g) => {
        return (
          <div key={g.game_id}>
            <p>{g.game_id}</p>
            <p>Players {g.player_ids.length}</p>
            <button onClick={() => onJoinGame(g.game_id)} disabled={loading}>
              Join Game
            </button>
          </div>
        );
      })}
      <button onClick={onNewGame} disabled={loading}>
        New Game
      </button>
      <button onClick={() => setCurrentUser("")}>Log Out</button>
    </div>
  );
}

export default GameLobby;
