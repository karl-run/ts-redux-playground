import { createSelector } from 'reselect'
import { AppState } from '../redux/reducers'

export interface SelectedProps {
  doThing: boolean
  otherValue: string | null
}

const selectCoolStuff = (state: AppState) => state.cool

export default createSelector(
  selectCoolStuff,
  (coolStuff): SelectedProps => ({
    doThing: coolStuff.debug,
    otherValue: coolStuff.someStringValue,
  }),
)
