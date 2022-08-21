import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IdName } from "src/app/helpers/navigation";
import { Game } from "./games.model";
import { GameState } from "./games.reducer";

export const selectFeature = createFeatureSelector<GameState>('games');

export const selectGames = createSelector(selectFeature, (state: GameState): Array<Game> => state.data );

export const selectGameTotal = createSelector(selectFeature, (state: GameState): number => state.total );

export const selectCateogry = createSelector(selectFeature, (state: GameState): IdName | null => state.category );

export const selectedGame = createSelector(selectFeature, (state: GameState): Game | null => state.selected);