import React, { useState } from 'react'
import { Button, FormContainer, FormTitle, Input, InputContainer, LoginContainer, TitleContainenr, Volver } from './LoginStyles'

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = user === '' || password === '';

    const handleLogin = (e) => {

        e.preventDefault();

        if (user === '' || password === '') {
            console.log('Invalid data.');
            return;
        } else {
            console.log('Login...')
        }

    };

    return (

        <LoginContainer>

            <FormContainer onSubmit={handleLogin} method="POST" >

                <TitleContainenr>
                    <FormTitle to="/">Hi,</FormTitle>
                    <FormTitle to="/">Welcome back!</FormTitle>
                </TitleContainenr>

                <InputContainer>
                    <Input
                        placeholder='User'
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value.trim())}
                    />
                </InputContainer>

                <InputContainer>
                    <Input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                </InputContainer>

                <Button disabled={isInvalid} type="submit">Sign In</Button>
                <Volver to="/">Volver a la página principal</Volver>

            </FormContainer>

        </LoginContainer>

    )
}

export default Login