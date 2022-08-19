import { createSelector } from "@ngrx/store";
import { JackpotState } from "./jackpot.reducer";

export const selectFeature = (state: JackpotState) => state;
export const selectJackpot = createSelector(selectFeature, (state: JackpotState) => state.data);
export const selectJackpotTotal = createSelector(selectFeature, (state: JackpotState) => state.total);