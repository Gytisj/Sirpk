import React from 'react'
import Styled from 'styled-components'

const ContainerStyle = Styled.div`
    max-width: 80%;
    background-color: lightgrey;
    margin: 5% auto 0;
    
`;

export const ContentContainer = ({ children }) => {
    return (
        <div>
            <ContainerStyle>{children}</ContainerStyle>
        </div>
    )
}
