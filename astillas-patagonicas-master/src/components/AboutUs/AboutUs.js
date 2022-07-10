import React from 'react'
import { AboutUsCard, AboutUsCardContainer, AboutUsSection, MainTitle, ProductImage, WhatWeOffer } from './AboutUsStyles'
import { useSelector } from 'react-redux';

const AboutUs = () => {

    const aboutUsBackup = 'Ofrecemos un mix especial de astillas y aserrín de lenga, ciprés, coihue, radal y laura provenientes de la mejor calidad en madera de la Patagonia, para que disfrutes el sabor del ahumado del Sur en la comodidad de tu casa. Accesible y ecológico, sin necesidad de pagar los costes de importar la leña pero con los mismos resultados. Listas para usar sobre las brasas, debajo de la parrilla.';

    const { aboutUs } = useSelector(state => state.aboutUs);

    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };

    return (

        <AboutUsSection id="nosotros">

            <AboutUsCard
                initial={initial}
                animate={animate}
                transition={{ type: "spring", stiffness: 100 }}
            >

                <AboutUsCardContainer>

                    <MainTitle>SOBRE NOSOTROS</MainTitle>

                    <WhatWeOffer> {aboutUs ? aboutUs : aboutUsBackup} </WhatWeOffer>

                </AboutUsCardContainer>

                <AboutUsCardContainer>

                    <ProductImage src={require(`../../misc/images/IMG-20220404-WA0011.jpg`)} />

                </AboutUsCardContainer>

            </AboutUsCard>

        </AboutUsSection>

    )
}

export default AboutUs