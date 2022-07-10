import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AboutUsSection = styled.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0px -16px #004a33;
    background-color: #f0f0f0;
`;

export const AboutUsCard = styled(motion.div)`
// #006e56
    padding: 80px;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media screen and (max-width: 960px) {
        padding: 0px;
        padding-top: 30px;
        width: 100%;
        box-shadow: 0px -16px #004a27;
        flex-direction: column;
        align-items: center;
	}
`;

export const AboutUsCardContainer = styled.div`
    display: flex;
    width: 50%;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 960px) {
        width: 95%;
        flex-direction: column;
        align-items: center;
	}
`;

export const MainTitle = styled.h1`
    font-size: clamp(2.5rem, 3vw, 3.3rem);
    color: #004a33;
`;

export const WhatWeOffer = styled.p`
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    margin-top: 45px;
    letter-spacing: 1px;
    line-height: 35px;
    text-align: left;
    object-fit: cover;
    

    @media screen and (max-width: 960px) {
        margin-top: 10%;
        margin-bottom: 10%;
	}
`;

export const ImageContainer = styled.div`
    margin-top: 70px;
    height: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const ProductImage = styled.img`
    height: 400px;
    width: 80%;
    object-fit: cover;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

    :hover {
        transform: translate(0, -5px);
        transition: transform 1s;
    }

    :not(:hover) {
        transition: transform 1s;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        padding-bottom: 15px;
	}
`;

export const ProductVideo = styled.video`
	width: 100%;
	height: 400px;
`;

