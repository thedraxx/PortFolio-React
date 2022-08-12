import styled from 'styled-components'

export const ImageCard = styled.img`
  width: 100%;
`
export const CustomDiv = styled.div`
  display: flex;
  transition: transform .2s;
  
  &:hover{
    transform: scale(1.1); 
    box-shadow: 0 0 11px rgba(33,33,33,.2);

     }
`

export const CardLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: white;
`
