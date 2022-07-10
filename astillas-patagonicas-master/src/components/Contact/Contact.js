import React from 'react'
import { ContactColumn, ContactContainer, ContactEmail, ContactName, ContactNumber, ContactText } from './ContactStyles'

const Contact = () => {

    return (

        <ContactContainer id="contacto">

            <ContactColumn>

                <ContactName type="text" name="name" placeholder='Nombre' />

                <ContactNumber type="" name="mobile" placeholder='Teléfono' />

            </ContactColumn>

            <ContactEmail type="Email" name="email" placeholder='Email' />

            <ContactText name="message" placeholder='Mensaje' />

        </ContactContainer>

    )
}

export default Contact