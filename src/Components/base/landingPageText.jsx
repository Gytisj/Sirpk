import React from 'react'
import Styled from 'styled-components'
import { Paragraph } from './paragraph'

const LandingPageTextStyle = Styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    text-align: center;
    background-color: #F2F2F2;
    -moz-box-shadow:    3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow:         1px 1px 1px 1px #ccc;
    border-radius: 2px;
    .column {
        width: 70%;
        margin-left: 10%;
        margin-top: 5%;
    }

`

export const LandingPageText = () => {
  return (
    <div>
      <LandingPageTextStyle>
        <div className='column'>
          <Paragraph>
            VienLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.as
          </Paragraph>
        </div>
        <div className='column'>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </div>
      </LandingPageTextStyle>
    </div>
  )
}
