import styled from 'styled-components';
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
	height: 60vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);

	@media screen and (max-width: 1200px) {
		height: 70vh;
	}
`;

export const HeroImage = styled.img`
    object-fit: cover;
	width: 100%;
	height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
	filter: brightness(64%) saturate(105%) contrast(86%);
-webkit-filter: brightness(64%) saturate(105%) contrast(86%);
-moz-filter: brightness(64%) saturate(105%) contrast(86%);
`;

export const HeroContainer = styled.div`
	/* background-color: green; */
	width: 100%;
	height: 35%;
	margin-top: 20px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media screen and (max-width: 1400px) {
		padding: 30px;
		width: 100%;
		margin-top: 0px;
	}
`;

export const HeroTitleContainer = styled.div`
	margin: 5%;
`;

export const HeroMainHeading = styled.h1`
	font-size: clamp(2rem, 5vw, 4rem);
    color: ${({ inverse }) => (inverse ? '$403ae3' : '#FFF')};
    width: 100%;
    letter-spacing: 8px;
	font-family: 'Koulen', cursive;
	
	@media screen and (max-width: 1000px) {
		margin-bottom: 10px;
		line-height: 40px;
	}
`;

export const HeroText = styled.p`
	text-align: center;
	width: 70%;
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.2rem);
	line-height: 20px;
	letter-spacing: 1.2px;
	color: #113018;
	/* -webkit-text-stroke: px #b8a44d;  */
	font-family: 'Koulen', cursive;
	font-weight: 600;
	background: #cfb959;
	padding: 7px;
    border-radius: 5px;

	@media screen and (max-width: 1000px) {
		background: none;
		color: #fff;
		font-weight: 400;
		padding: 0;
		text-align: left;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: wrap;
	gap: 1rem;
	margin-top: ${({ mt }) => (mt ? '10px' : '')};
`;

export const HeroButton = styled(Button)`
	color: #113018;
	font-weight: 1000;
	border: none;
	background: #b8a44d;

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