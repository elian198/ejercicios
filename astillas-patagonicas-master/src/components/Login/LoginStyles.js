import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
	height: 100vh;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2200' height='1250' preserveAspectRatio='none' viewBox='0 0 2200 1250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1078%26quot%3b)' fill='none'%3e%3crect width='2200' height='1250' x='0' y='0' fill='rgba(0%2c 74%2c 51%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c1233 C 146.8%2c1101.2 440.4%2c616.6 734%2c574 C 1027.6%2c531.4 1174.8%2c1073 1468%2c1020 C 1761.2%2c967 2053.6%2c451.2 2200%2c309L2200 1250L0 1250z' fill='rgba(207%2c 185%2c 89%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c537 C 88%2c623.2 264%2c983.8 440%2c968 C 616%2c952.2 704%2c443 880%2c458 C 1056%2c473 1144%2c1115 1320%2c1043 C 1496%2c971 1584%2c67.6 1760%2c98 C 1936%2c128.4 2112%2c975.6 2200%2c1195L2200 1250L0 1250z' fill='rgba(91%2c 80%2c 33%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c1047 C 146.8%2c959.6 440.4%2c667 734%2c610 C 1027.6%2c553 1174.8%2c804.2 1468%2c762 C 1761.2%2c719.8 2053.6%2c471.6 2200%2c399L2200 1250L0 1250z' fill='rgba(10%2c 59%2c 44%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1078'%3e%3crect width='2200' height='1250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 350px;
    height: 510px;
    border-radius: 20px;
    background: black;
    gap: 10%;
    :hover {
        box-shadow: rgba(184, 164, 77, 0.4) -5px 5px, rgba(184, 164, 77, 0.3) -10px 10px, rgba(184, 164, 77, 0.2) -15px 15px, rgba(184, 164, 77, 0.1) -20px 20px, rgba(184, 164, 77, 0.05) -25px 25px;
        transition: box-shadow 0.3s;
    }

    :not(:hover) {
        transition: box-shadow 0.3s;
    }
`;

export const TitleContainenr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-content: left;
`;

export const FormTitle = styled(Link)`
    font-size: 25px;
    color: #fafafa;
    text-decoration: none;
`;

export const InputContainer = styled.div`
    width: 90%;
    height: 12%;
    border-radius: 10px;
`;

export const Input = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 15px;
    color: #fafafa;
    border: none;
    font-size: 15px;
    background: black;
    border-bottom: 1px solid #fafafa;

    :focus {
        outline: none;
    }
`;

export const Button = styled.button`
    height: 12%;
    width: 90%;
    border-radius: 30px;
    border: none;
    background-color: ${({ disabled }) => (disabled ? 'rgb(130,119,68,0.5)' : 'rgb(130,119,68,1)')};
    background: ${({ disabled }) => (disabled ? 'linear-gradient(350deg, rgba(130,119,68,0.8) 0%, rgba(207,185,89,0.8) 100%)' : 'linear-gradient(350deg, rgba(130,119,68,1) 0%, rgba(207,185,89,1) 100%)')};
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.2px;
    cursor: pointer;
    display: block;
`;

export const Volver = styled(Link)`
    font-size: 12px;
    color: #fafafa;
    text-decoration: none;
`;