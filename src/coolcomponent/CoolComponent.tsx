import React from 'react'
import { connect } from 'react-redux'

import { coolAction, somethingElse } from './CoolComponentActions'
import selector, { SelectedProps } from './CoolComponentSelector'

interface Props extends SelectedProps {
  text: string
}

const CoolComponent = ({ text, doThing, otherValue }: Props) => {
  const textified = text.toUpperCase()

  return (
    <>
      <div>Such text: {textified}</div>
      <div>
        From redux: {doThing}, {otherValue}
      </div>
    </>
  )
}

const withRedux = connect(
  selector,
  {
    coolAction,
    somethingElse,
  },
)

export default withRedux(CoolComponent)
