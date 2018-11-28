import { CoolActions, CoolActionsEnum } from './CoolComponentActions'

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
  action: CoolActions,
): CoolComponentState => {
  switch (action.type) {
    case CoolActionsEnum.SOMETHING_ELSE: {
      return { ...state, debug: true }
    }
    case CoolActionsEnum.COOL_ACTION: {
      return { ...state, someStringValue: 'can only be string' }
    }
    case CoolActionsEnum.NO_PAYLOAD_ACTION: {
      return state;
    }
    default:
      return state
  }
}

export default controlPanelReducer
