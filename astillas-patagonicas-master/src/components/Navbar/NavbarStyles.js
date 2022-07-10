import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

// el nav tiene un margin, y para que el
// el hero section no se vea modicado,
// hay que darle un marginbottom de -80px;

export const Nav = styled.nav`
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
	background-color: ${({ bgColor }) => (bgColor ? 'black' : '')};
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
    justify-content: space-between;
`;

export const NavLogo = styled(Link)`
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
	letter-spacing: -6px;
	gap: 10px;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #004a33;
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	font-family: 'Roboto', cursive;

	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}

`;

export const NavLinks = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #b8a44d;
		transition: all 0.3s ease;
	}
	&:not(:hover){
			transition: all 0.3s;
		}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		display: table;
        width: 100%;
		&:hover {
			color: #b8a44d;
			transition: all 0.2s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;