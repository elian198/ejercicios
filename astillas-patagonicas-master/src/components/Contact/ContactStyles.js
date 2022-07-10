import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const ContactColumn = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10%;
    margin-bottom: 20px;
`;

export const ContactName = styled.input`
    width: 50%;
    padding: 20px;
`;

export const ContactNumber = styled.input`
    width: 50%;
    padding: 20px;
`;

export const ContactEmail = styled.input`
    padding: 20px;
    margin-bottom: 20px;
`;

export const ContactText = styled.textarea`
    padding: 30px;
    display: flex;
`;
