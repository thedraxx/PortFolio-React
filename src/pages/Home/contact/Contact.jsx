import React from 'react'
import { FormSubmit } from '../../../components/form/FormSubmit'
import { ContactMe, ContainerText, TitleContact, TextContact } from './style'

const Contact = () => (
    <>
    <ContactMe>
        <ContainerText>
            <TitleContact>{'let\'s make something great!'}</TitleContact>
            <TextContact>  Have a question or want to work together? </TextContact>
        </ContainerText>

    </ContactMe>
    <FormSubmit />
    </>
)

export default Contact
