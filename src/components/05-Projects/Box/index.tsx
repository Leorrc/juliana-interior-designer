import * as React from 'react'
import { useState } from 'react'

import { BoxStyled } from './styles'

const Box: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <>
      <button
        className="p-10 text-2xl"
        type="button"
        onClick={() => setIsVisible(prevValue => !prevValue)}
      >
        Click here to make content visible
      </button>
      <BoxStyled animate={isVisible ? 'visible' : 'hidden'}>
        I'm visible222222!
      </BoxStyled>
    </>
  )
}

export default Box
