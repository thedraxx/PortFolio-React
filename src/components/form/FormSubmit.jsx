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

export const FormSubmit = () => {
  const form = useRef()
  const { active } = useSelector((state) => state.isActive)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    message: ''
  })

  const { searchText } = formValues

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_qksi4tc', 'template_zqzc909', form.current, 'ywb4feFd4jk6dBlo8')
      .then((result) => {
        alert('Mensaje enviado correctamente')
      }, (error) => {
        console.log(error.text)
      })
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
              value={searchText}
              onChange={handleInputChange}

            />
            <CustomInput
              active={active}
              type="text"
              placeholder="Enter email"
              className="form-control"
              name="email"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <CustomInput
              active={active}
              type="text"
              placeholder="your Message"
              className="form-control"
              name="message"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <ButtonSubmit type="submit" active={active}>Submit</ButtonSubmit>
          </form>
        </ContainerForms>
      </ContainerInputs>
    </ContainerGeneral>
  )
}
