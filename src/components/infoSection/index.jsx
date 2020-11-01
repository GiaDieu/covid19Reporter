import React from 'react'
import {InfoContainer, InfoWrapper,InfoContent, InfoHeading, InfoParagraph, InfoButton} from "./InfoSectionElements";

const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoContent>
                    <InfoHeading>
                        Welcome to GiaDieu's Reporter of Covid19 (covered Idea)
                    </InfoHeading>
                    <InfoParagraph>
                        Since Covid19 is spreading dramatically, I have covered the small Web Application from outstanding lecturer<strong> Javascript Mastery</strong> so that we could see the actual data and keep us information updated and safe!
                    </InfoParagraph>
                </InfoContent>
                <InfoButton to="/home">To Continue</InfoButton>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
