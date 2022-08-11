import React from 'react'
import { ContactMe, ContainerText, Hello, TextContact } from './style'

const Contact = () => (
    <ContactMe>
        <ContainerText>
            <Hello>Just say hi.</Hello>
            <TextContact>  Do you fancy saying hi to me or do you have an interesting project that you think I can provide value? Feel free to contact me.  </TextContact>
        </ContainerText>
        <div>
            {/* form */}
        </div>
    </ContactMe>
)

export default Contact
