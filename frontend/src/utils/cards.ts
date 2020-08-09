import { RawCards, Card } from '../data/cards';
const getCardFaces = (cards:Card[]) => cards.map(c => c.icon)
type Season = 'spring' | 'summer' | 'fall' | 'winter';
type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
const suitsToSeasonsMap: [Suit, Season][] = [
    ['hearts', 'spring'], 
    ['diamonds', 'summer'],
    ['clubs', 'fall'],
    ['spades', 'winter'],
];

const seasonToSuit = (seasonToFind: Season): Suit => {
    const correctPairing = suitsToSeasonsMap.find(
        ([suit, season]) => season === seasonToFind) as [Suit, Season];
    return correctPairing[0];
}
const suitToSeason = (suitTofind: Suit): Season => {
    const correctPairing = suitsToSeasonsMap.find(
    ([suit, season]) => suit === suitTofind) as [Suit, Season];
    return correctPairing[1];
};

const getRawCardsForSuit = (suit: Suit): Card[] => 
    RawCards.filter(c => c.name.toLowerCase().indexOf(suit) >= 0);
const getRawCardsForSeason = (season: Season): Card[] =>
    getRawCardsForSuit(seasonToSuit(season));
const shuffleCards = (cards: Card[]) => 
    cards.map(c => 
        ({ sortVal: Math.random(), card: c})
    ).sort(
        (a, b) => a.sortVal - b.sortVal
    ).map(cv => cv.card);



export const generateCards = (): string[] => [
    ...getCardFaces(shuffleCards(getRawCardsForSeason('spring'))),
    ...getCardFaces(shuffleCards(getRawCardsForSeason('summer'))),
    ...getCardFaces(shuffleCards(getRawCardsForSeason('fall'))),
    ...getCardFaces(shuffleCards(getRawCardsForSeason('winter'))),
];
