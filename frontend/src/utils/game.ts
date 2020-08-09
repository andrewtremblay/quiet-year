import { generateCards } from "./cards";

export const newGameInfo = (currentUserId: string, mapRef: string, gameSecret: string = '') => ({
    player_ids: [currentUserId],
    game_id: '',
    started_at: '',
    decisions: [],
    created_at: (new Date()).getTime().toString(),
    spite: {},
    resources: [],
    played_cards: [],
    remaining_cards: generateCards(),
    game_secret: gameSecret,
    map_ref: mapRef,
    ended_at: ''
});