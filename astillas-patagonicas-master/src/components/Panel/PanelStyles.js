import styled from 'styled-components';

export const PanelBackground = styled.div`
    background-color: #004a33;
    min-height: 100vh;
    height: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 5%;
    padding: 10px;
`;

export const SobreNosotros = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 80%;
`;

export const Title = styled.h1`
    font-size: 25px;
    height: 20%;
`;

export const Info = styled.p`
    font-size: 15px;
    height: 80%;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: ${({ setenta }) => (setenta ? '40%' : '100%')} ;
    padding: 10px;
    font-size: 15px;
`;

export const FileBaseContaine = styled.div`
    height: 6%;
`;

export const ButtonContainer = styled.div`
    height: 15%;
    gap: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const DescriptionButton = styled.button`
    height: 100%;
    width: ${({ small }) => (small ? '15%' : '100%')};
    border-radius: 5px;
    border: none;
    background-color: ${({ disabled }) => (disabled ? 'rgb(130,119,68,0.5)' : 'rgb(130,119,68,1)')};
    background: ${({ disabled }) => (disabled ? 'linear-gradient(350deg, rgba(130,119,68,0.8) 0%, rgba(207,185,89,0.8) 100%)' : 'linear-gradient(350deg, rgba(130,119,68,1) 0%, rgba(207,185,89,1) 100%)')};
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.2px;
    cursor: pointer;
`;

export const EditPanelContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: clamp(70px, 15vh, 220px);
    gap: 5%;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 10px;
	}
`;

export const EditCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 45%;
    max-width: 650px;
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    row-gap: 5%;

    @media screen and (max-width: 960px) {
        width: 94%;
	}
`;

export const ProductPanelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    margin: 3%;
    width: 45%;
    max-width: 650px;

    @media screen and (max-width: 960px) {
        width: 94%;
        margin-bottom: 10%;
	}
`;

export const ProductSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 18px;
    padding-right: 18px;
    cursor: pointer;

    &:hover{
        background-color: #e3e3e3;
        border-radius: 10px;
    };
`;

export const ProductId = styled.p`
    width: 10%;
    cursor: pointer;
`;

export const ProductTitle = styled.p`
    width: 60%;
    overflow: hidden;
`;

export const ProductButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 20%;
    gap: 5%;
    height: 30px;
`;

export const ProductButton = styled.p`
    font-size: 25px;
    display: flex;
    align-items: center;
    color: black;
`;
