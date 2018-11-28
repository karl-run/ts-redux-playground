import { combineReducers } from 'redux'

import cool, { CoolComponentState } from '../coolcomponent/CoolComponentReducer'
import other, { OtherComponentState } from '../othercomponent/OtherComponentReducer'

export interface AppState {
  cool: CoolComponentState
  other: OtherComponentState
}

export default combineReducers({ cool, other })
