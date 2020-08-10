import React from "react";
import { useFirestoreDocData, useFirestore } from "reactfire";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { generateCards, cardFromCardIcon } from "../utils/cards";

const Player = (props: any) => {
  const { player_id, game } = props;
  const playerRef = useFirestore().collection("users").doc(player_id);
  const player: any = useFirestoreDocData(playerRef);
  return (
    <Grid direction="column">
      <Typography align="left" variant="h5">
        {player.name}
      </Typography>
    </Grid>
  );
};

const CardDesc = (props: any) => {
  const { cardDesc } = props;
  if (cardDesc.indexOf("or...") >= 0) {
    const options = cardDesc.split("or...");
    return (
      <Grid>
        <CardDesc cardDesc={options[0]} />
        <Typography variant="h2">or...</Typography>
        <CardDesc cardDesc={options[1]} />
      </Grid>
    );
  }
  if (cardDesc.indexOf("• ") >= 0) {
    const [description, ...options] = cardDesc.split("• ");
    return (
      <Grid>
        <Typography variant="h5">{description}</Typography>
        {options.map((opt: string, index: number) => (
          <Typography variant="h6" key={index}>
            • {opt}
          </Typography>
        ))}
      </Grid>
    );
  }
  return <Typography variant="h5">{cardDesc}</Typography>;
};

const PlayedCard = (props: any) => {
  const { card: cardIcon } = props;
  if (!cardIcon || cardIcon.length === 0) {
    return null;
  }
  const card = cardFromCardIcon(cardIcon);
  return (
    <Grid container>
      <Box display="flex">
        <Grid xs={2}>
          <Typography variant="h1">{cardIcon}</Typography>
        </Grid>
        <Grid xs={10}>
          <CardDesc cardDesc={card.desc} />
        </Grid>
      </Box>
    </Grid>
  );
};

const Game = (props: any) => {
  const { currentUser, setCurrentUser, currentGame, setCurrentGame } = props;
  const currentUserRef = useFirestore().collection("users").doc(currentUser);
  const gameRef = useFirestore().collection("games").doc(currentGame);
  const game: any = useFirestoreDocData(gameRef);
  const shuffleDeck = async () => {
    const currentGame = await gameRef.get();
    const currentData = currentGame.data();
    gameRef.set({
      ...currentData,
      remaining_cards: generateCards().join(","),
      played_cards: "",
    });
  };
  const nextCard = async () => {
    const currentGame = await gameRef.get();
    const currentData = currentGame.data() || { remaining_cards: "" };
    const remainingCardData = currentData.remaining_cards.split(",");
    const playedCardData = currentData.played_cards.split(",");
    const nextCard = remainingCardData.reverse().pop();
    playedCardData.push(nextCard);
    gameRef.set({
      ...currentData,
      remaining_cards: remainingCardData.reverse().join(","),
      played_cards: playedCardData.join(","),
    });
  };
  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container xs={12}>
          <Grid xs={12}>
            <Button onClick={() => setCurrentGame("")}>Leave Game</Button>
            <Button onClick={() => setCurrentUser("")}>Log Out</Button>
            <Button onClick={shuffleDeck}>Suffle Deck</Button>
            <Button onClick={nextCard}>Next Card</Button>
          </Grid>
          <Grid direction="column" xs={12}>
            <Box display="flex">
              <Grid xs={8}>
                <img
                  style={{ maxWidth: "75%" }}
                  src="https://docs.google.com/drawings/d/e/2PACX-1vQeFwc3UmXx4KTy1Qpx7tuQAj_qIq_6a4yo1iuwHnCu_kVvzYCDyUdkWZiU7uJHcw16V5GztJL9Xqnj/pub?w=1440&amp;h=1080"
                ></img>
              </Grid>
              <Grid xs={3} alignContent="flex-start">
                <Typography align="left">Players</Typography>
                <Grid direction="row">
                  {game.player_ids.map((pId: string) => (
                    <Player player_id={pId} game={game} />
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Box display="flex">
            {game.played_cards && game.played_cards.length && (
              <Grid xs={12} alignContent="flex-start">
                <Typography align="left">Cards</Typography>
                <Grid direction="row">
                  {game.played_cards
                    .split(",")
                    .reverse()
                    .map((card: string) => (
                      <PlayedCard card={card} />
                    ))}
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Game;
