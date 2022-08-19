import { createAction, props} from "@ngrx/store";

export const getGames = createAction('[Games] Get Data');

export const getGamesSuccess = createAction('[Games] Get Data Success', props<{ payload: Array<any> }>());

export const getGamesFailure = createAction('[Games] Get Data Failure', props<{ error: any }>());