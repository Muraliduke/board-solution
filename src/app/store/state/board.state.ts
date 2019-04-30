import { Board } from '../../models/board.interface';


export interface IBoardState {
  board: Board[];
}

export const initialBoardState: IBoardState = {
  board: null
};