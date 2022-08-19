import { createSelector } from "@ngrx/store";
import { GameState } from "./games.reducer";

export const selectFeature = (state: GameState) => state;
export const selectGames = createSelector(selectFeature, (state: GameState) => state.data);
export const selectGameTotal = createSelector(selectFeature, (state: GameState) => state.total);