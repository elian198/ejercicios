import React from 'react'
import { HeroSection, HeroText, HeroImage, HeroMainHeading, HeroContainer, HeroTitleContainer } from './HeroStyles'
import backgroundImage from '../../misc/images/scdb2.jpg'

const Hero = () => {

    // const scrollTo = (id) => {
    //     const element = document.getElementById(id);

    //     element.scrollIntoView({
    //         behavior: 'smooth',
    //     });
    // };

    return (

        <HeroSection>

            <HeroImage src={backgroundImage} alt='background' />

            <HeroContainer>

                <HeroTitleContainer>

                    <HeroMainHeading>Astillas Patagonicas</HeroMainHeading>

                    <HeroText>Astillas de la mejor calidad al mejor precio.</HeroText>

                </HeroTitleContainer>

                {/* <ButtonWrapper mt>
                    <HeroButton onClick={() => scrollTo('nosotros')} >CONOCÉ MÁS</HeroButton>
                </ButtonWrapper> */}

            </HeroContainer>

        </HeroSection>

    )
}

export default Hero