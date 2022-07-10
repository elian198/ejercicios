import React from 'react'
import { FooterContainer, FooterElement, FooterIcon, FooterText, FooterWrapper, WaterMark, WaterMarkContainer } from './FooterStyles'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'

const Footer = () => {

    return (

        <FooterContainer id="contacto">

            <FooterWrapper>

                <FooterElement to={{ pathname: 'https://api.whatsapp.com/send/?phone=541165081871&text&app_absent=0' }} target="_blank">
                    <FooterIcon> <FaWhatsapp /> </FooterIcon>
                    <FooterText>Contactame por WhatsApp</FooterText>
                </FooterElement>

                <FooterElement to={{ pathname: 'https://www.instagram.com/astillaspatagonicas/' }} target="_blank">
                    <FooterIcon> <FaInstagram /> </FooterIcon>
                    <FooterText>Seguinos en Instagram</FooterText>
                </FooterElement>

                <FooterElement to={{ pathname: 'mailto:d.reboredo@yahoo.com.ar' }} target="_blank">
                    <FooterIcon> <MdEmail /> </FooterIcon>
                    <FooterText>Contactame por Email</FooterText>
                </FooterElement>

            </FooterWrapper>

            <WaterMarkContainer>
                <WaterMark to="/">by Student Team 2022 to Astillas Patagónicas ©</WaterMark>
            </WaterMarkContainer>

        </FooterContainer>

    )
}

export default Footer