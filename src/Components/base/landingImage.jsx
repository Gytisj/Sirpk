import React from 'react'
import Styled from 'styled-components'
import { Paragraph } from './paragraph'

const LandingImageStyle = Styled.img`
    position: relative;
    width: 85vw;        
    height: 60vh;
`

const LandingPageTextSquare = Styled.div`
    position: relative;
    text-align: left;
    width: 35%;
    min-height: 250px;
    margin: 0 auto;
    bottom: 90px;
    font-size: 50px;
    padding: 50px 100px;
    color: #1B2D69;
    
    background-color: #F2F2F2;
    -moz-box-shadow:    3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow:         1px 1px 1px 1px #ccc;
    border-radius: 2px;

    

`
export const LandingImage = (props) => {
  return (
    <div>
      <LandingImageStyle src={props.url} />
      <LandingPageTextSquare>
        <Paragraph>{props.Text}</Paragraph>
      </LandingPageTextSquare>
    </div>
  )
}
