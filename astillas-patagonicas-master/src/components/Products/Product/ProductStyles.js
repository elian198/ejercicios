import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductContainer = styled(motion.div)`
    background-color: #fff;
    width: 580px;
    height: 300px;
    max-height: 300px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    margin-bottom: 55px;

    :hover {
        box-shadow: rgba(184, 164, 77, 0.4) -5px 5px, rgba(184, 164, 77, 0.3) -10px 10px, rgba(184, 164, 77, 0.2) -15px 15px, rgba(184, 164, 77, 0.1) -20px 20px, rgba(184, 164, 77, 0.05) -25px 25px;
        transition: box-shadow 0.3s;
    }

    :not(:hover) {
        transition: box-shadow 0.3s;
    }

    @media screen and (max-width: 960px) {
        flex-direction: column;
        padding: 20px;
        max-height: 100%;
        height: 100%;
        width: 100%;
        border-radius: 0px;
    };

    @media screen and (min-width: 1600px) {
        width: 650px;
    };
`;

export const ProductImage = styled.img`
    width: 50%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media screen and (max-width: 960px) {
        margin-top: 10px;
        width: 100%;
        height: 360px;
        border-radius: 10px;
    };
`;

export const ProductDataContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
    };
`;

export const ProductNameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 20%;
`;

export const ProductName = styled.h1`
    color: #004a33;
`;

export const ProductDescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    height: 60%;
    width: 100%;
`;

export const ProductDescription = styled.p`
    line-height: 25px;
    letter-spacing: 1px;
    padding: 10px;
`;

export const ProductButtonContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 20%;
    width: 100%;
`;

export const ProductButton = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
	color: #113018;
	font-weight: 1000;
	border: none;
	background: #b8a44d;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    
	&:before {
		background: #cfb959;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		background: #cfb959;
		color: #113018;
	}
`;