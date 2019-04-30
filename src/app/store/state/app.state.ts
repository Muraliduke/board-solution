import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { initialConfigState, IConfigState } from './config.state';
import { IBoardState , initialBoardState } from './board.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
  board: IBoardState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  board: initialBoardState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
