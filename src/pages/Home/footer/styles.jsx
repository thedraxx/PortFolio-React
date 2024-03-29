import styled from 'styled-components'
import { colors } from '../../../utilities/colors'

export const SuperFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 50px;
  background-color: ${colors.black};
`

export const TextFooter = styled.div`
  color: ${colors.white};
  font-size: 35px;
  font-weight: bold;

  @media screen {
    @media (max-width: 1000px) {
      color: ${colors.white};
      font-size: 30px;
      text-align:center;
      margin-bottom:20px;
    }
  }
`
export const SubTextFooter = styled.div`
  color: ${colors.white};
  font-size: 20px;

  @media screen {
    @media (max-width: 1000px) {
      color:${colors.white};
      font-size: 15px;
    }
  }
`
export const Matecito = styled.h3`
  color: ${colors.white};
  font-size: 15px;
  margin-top: 10px;
`

export const Img = styled.img`
  margin-top: 20px;
  width: 20%;

  @media screen {
    @media (max-width: 1000px) {
      margin-top: 20px;
      width: 50%;
    }
  }
`
