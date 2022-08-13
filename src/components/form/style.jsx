import styled from 'styled-components'

export const ContainerGeneral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  flex-direction: column;
`

export const CustomInput = styled.input`
  border: ${(props) => (props.active ? '1px solid #000' : '1px solid #000')};
  width: 700px;
  height: 80px;
  background-color: ${(props) => (props.active ? '#212529' : '#ffffff')};
  color: ${(props) => (props.active ? '#ffffff' : '#212529')};
  border-radius: 15px;
  margin-top: 10px;
  &:focus {
    outline: none;
    background-color: ${(props) => (props.active ? '#212529' : '#ffffff')};
    box-shadow: 0px 0px 2px "#bababa";
    color: ${(props) => (props.active ? '#ffffff' : '#212529')};
  }

  &::placeholder {
    color: ${(props) => (props.active ? '#ffffff' : '#212529')};
  }

  @media screen {
    @media (max-width: 1000px) {
      width: 80vw;
      height: 10vh;
    }
  }
`

export const ContainerForms = styled.div`
  display: flex;
  border: 1px #c2c2c2;
  justify-content: center;
  align-items: center;
`
export const ButtonSubmit = styled.button`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 30px;
  background-color: ${(props) => (props.active ? '#000000' : '#dcdcdc')};
  color: ${(props) => (props.active ? '#ffffff' : '#000000')};
  border: 1px solid #000;
  border-radius: 15px;
  border: "none";
`
