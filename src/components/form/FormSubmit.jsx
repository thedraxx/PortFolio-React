import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import emailjs from '@emailjs/browser'
import {
  ButtonSubmit,
  ContainerForms,
  ContainerGeneral,
  ContainerInputs,
  CustomInput
} from './style'
import Swal from 'sweetalert2'

export const FormSubmit = () => {
  const form = useRef()
  const { active } = useSelector((state) => state.isActive)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formValues

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' && email === '' && message === '') {
      alert('Todos los campos son obligatorios')
    } else if (name === '' && email === '') {
      alert('El nombre y el email son obligatorios')
    } else if (name === '' && message === '') {
      alert('El nombre y el mensaje son obligatorios')
    } else if (email === '' && message === '') {
      alert('El email y el mensaje son obligatorios')
    } else {
      emailjs.sendForm('service_qksi4tc', 'template_zqzc909', form.current, 'ywb4feFd4jk6dBlo8')
        .then((result) => {
          Swal.fire({
            title: 'Cool!',
            text: 'Thank you for send me a message!.',
            imageUrl: 'https://64.media.tumblr.com/31fad3e803b480028122e110de492529/12822f2403faf192-e9/s1280x1920/1c161cac0fdcaf3d614634953806f675b4cf9922.png',
            imageWidth: '100%',
            imageAlt: 'Custom image'
          })
        }, (error) => {
          console.log(error.text)
        })
    }
  }

  return (
    <ContainerGeneral>
      <ContainerInputs>
        <ContainerForms>
          <form onSubmit={sendEmail} ref={form}>
            <CustomInput
              active={active}
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}

            />
            <CustomInput
              active={active}
              type="text"
              placeholder="Enter email"
              className="form-control"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
            <CustomInput
              active={active}
              type="text"
              placeholder="your Message"
              className="form-control"
              name="message"
              autoComplete="off"
              value={message}
              onChange={handleInputChange}
            />
            <ButtonSubmit type="submit" active={active}>Submit</ButtonSubmit>
          </form>
        </ContainerForms>
      </ContainerInputs>
    </ContainerGeneral>
  )
}
