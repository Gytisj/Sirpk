import React from 'react'
import {LandingImage} from '../../Components/base/landingImage'
import {ContentContainer} from '../../Components/base/container'
import {LandingPageText} from '../../Components/base/landingPageText'




export const Main = () => {
  return <div>
    <LandingImage Text={"Kodėl rinktis mus? SIRPK"} url={'https://images.unsplash.com/photo-1505075625100-1a9150eacf21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} />
    <div className="square">

    </div>
    <ContentContainer>
      <LandingPageText>
      </LandingPageText>
    </ContentContainer>
  </div>
}
