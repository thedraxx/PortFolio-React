import styled from 'styled-components'

export const ImageCard = styled.img`
  width: 100%;
`
export const CustomDiv = styled.div`
  display: flex;
  transition: transform .2s;
  
  &:hover{
    transform: scale(1.5); 
    border-radius: 10px ;
  }
`
