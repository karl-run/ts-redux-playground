import { createAction, ActionFunctions } from 'redux-actions'

export enum CoolActions {
  COOL_ACTION = 'COOL_ACTION',
  SOMETHING_ELSE = 'SOMETHING_ELSE',
}

interface CoolPayload {
  wowsa: boolean
}

export const coolAction: ActionFunctions<CoolPayload> = createAction<CoolPayload>(CoolActions.COOL_ACTION)

interface SomethingElsePayload {
  whatever: string
}

export const somethingElse: ActionFunctions<SomethingElsePayload> = createAction<SomethingElsePayload>(
  CoolActions.SOMETHING_ELSE,
)
