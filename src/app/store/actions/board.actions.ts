import { Action } from '@ngrx/store';
import { Board, List , Card } from '../../models/board.interface';

export enum EBoardActions {
  CreateBoard = '[Board] Create Board',
  CreateList = '[Board] Create List',
  CreateCard = '[Board] Create Card',
  EditList = '[Board] Edit List',
  EditCard = '[Board] Edit Card',
}


export class CreateBoard implements Action {
  public readonly type = EBoardActions.CreateBoard;
  constructor(public payload: Board) {}
}

export class CreateList implements Action {
  public readonly type = EBoardActions.CreateList;
  constructor(public payload: List) {}
}

export class CreateCard implements Action {
  public readonly type = EBoardActions.CreateCard;
  constructor(public payload: Card) {}
}

export class EditList implements Action {
  public readonly type = EBoardActions.EditList;
  constructor(public payload: List) {}
}

export class EditCard implements Action {
  public readonly type = EBoardActions.EditCard;
  constructor(public payload: Card) {}
}

export type BoardActions =
| CreateBoard
| CreateList
| CreateCard
| EditList
| EditCard

