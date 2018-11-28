export interface OtherComponentState {
  deepObject: {
    something: boolean
    amount: number
  }
}

const initialOtherComponentState = {
  deepObject: {
    something: true,
    amount: 10,
  },
}

const controlPanelReducer = (state: OtherComponentState = initialOtherComponentState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default controlPanelReducer
