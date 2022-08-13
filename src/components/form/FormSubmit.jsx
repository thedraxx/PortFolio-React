import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import {
  ButtonSubmit,
  ContainerForms,
  ContainerGeneral,
  ContainerInputs,
  CustomInput
} from './style'

export const FormSubmit = () => {
  const { active } = useSelector((state) => state.isActive)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    message: ''
  })

  const { searchText } = formValues

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <ContainerGeneral>
      <ContainerInputs>
        <ContainerForms>
          <form onSubmit={handleSearch}>
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
