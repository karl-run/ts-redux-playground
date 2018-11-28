import { createAction } from 'redux-actions'
import { Action } from 'redux'

export enum CoolActionsEnum {
  COOL_ACTION = 'COOL_ACTION',
  SOMETHING_ELSE = 'SOMETHING_ELSE',
  NO_PAYLOAD_ACTION = 'NO_PAYLOAD_ACTION',
}

interface CoolPayload {
  wowsa: boolean
}

interface SomethingElsePayload {
  whatever: string
}

export type CoolActions =
  | Action<CoolActionsEnum.COOL_ACTION> & Payload<CoolPayload>
  | Action<CoolActionsEnum.SOMETHING_ELSE> & Payload<SomethingElsePayload>
  | Action<CoolActionsEnum.NO_PAYLOAD_ACTION>

export const coolAction = createAction<CoolPayload>(CoolActionsEnum.COOL_ACTION)
export const somethingElse = createAction<SomethingElsePayload>(CoolActionsEnum.SOMETHING_ELSE)
export const noPayloadAction = createAction<SomethingElsePayload>(CoolActionsEnum.SOMETHING_ELSE)
