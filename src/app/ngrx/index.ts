import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { gamesReducer, GameState } from "./games/games.reducer";
import { jackpotReducer, JackpotState } from "./jackpot/jackpot.reducer";

export interface State {
    jackpot: JackpotState;
    games: GameState;
}

export const reducers: ActionReducerMap<State> = {
    jackpot: jackpotReducer,
    games: gamesReducer,
}

export const metaReducers: MetaReducer<any>[] = [];