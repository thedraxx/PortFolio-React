import styled from 'styled-components'

export const ContactMe = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-left: 30px;
  @media screen {
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`
export const TitleContact = styled.h1`
  text-align: start;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
`
export const TextContact = styled.h4`
  font-size: 1rem;
  @media (max-width: 1000px) {
    text-align: center;
    font-size: 1.1rem;
  }
`
