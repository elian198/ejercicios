import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    margin: auto;
    background-color: black;
    width: 100%;
    height: 25vh;

`;

export const FooterWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media screen and (max-width: 960px) {
		gap: 10%;
	}
`;

export const FooterIcon = styled.p`
    font-size: 44px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterText = styled.p`
    font-size: 13px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
		display: none;
	}
`;

export const FooterElement = styled(Link)`
    text-decoration: none;
    color: #fff;
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        color: #dbdbdb;
    }
`;

export const WaterMarkContainer = styled.div`
    height: 20%;
`;

export const WaterMark = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 13px;
    letter-spacing: 1.2px;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 960px) {
        letter-spacing: 1px;
	}
`;