import React from 'react'
import Styled from 'styled-components'

const ParagraphStyle = Styled.p` 
    font-family: 'Montserrat', sans-serif;
`

export const Paragraph = ({ children }, props) => {
  return <ParagraphStyle>{children}</ParagraphStyle>
}
