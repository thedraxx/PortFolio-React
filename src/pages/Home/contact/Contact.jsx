import React from 'react'
import { FormSubmit } from '../../../components/form/FormSubmit'
import { ContactMe, ContainerText, TitleContact, TextContact, ContainerContact } from './style'

const Contact = () => (
    <ContainerContact>
    <ContactMe>
        <ContainerText>
            <TitleContact>{'let\'s make something great!'}</TitleContact>
            <TextContact>  Have a question or want to work together? </TextContact>
        </ContainerText>

    </ContactMe>
    <FormSubmit />
    </ContainerContact>
)

export default Contact
