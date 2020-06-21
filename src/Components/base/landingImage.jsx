import React from 'react'
import Styled from 'styled-components'


const LandingImageStyle = Styled.img`
    width: 50px;
`;

export const LandingImage = () => {
    return (
        <div >
            <LandingImageStyle src='https://wallpaperaccess.com/full/124587.jpg'/>
        </div>
    )
}
