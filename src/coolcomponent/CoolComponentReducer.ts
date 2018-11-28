import { CoolActions } from './CoolComponentActions'
import { Action } from 'redux'

export interface CoolComponentState {
  paused: boolean
  debug: boolean
  someStringValue: string | null
}

const initialCoolComponentState = {
  paused: false,
  debug: false,
  someStringValue: null,
}

const controlPanelReducer = (
  state: CoolComponentState = initialCoolComponentState,
  action: Action<CoolActions>,
): CoolComponentState => {
  switch (action.type) {
    case CoolActions.SOMETHING_ELSE:
      console.log('Cool action dispathed')
      return { ...state, debug: true }
    case CoolActions.COOL_ACTION:
      console.log('Something else dispathed')
      return { ...state, someStringValue: 'can only be string' }
    default:
      return state
  }
}

export default controlPanelReducer
