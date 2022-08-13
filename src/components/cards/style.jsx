import styled from 'styled-components'

export const ImageCard = styled.img`
  width: 100%;
  @media screen {
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`
export const CustomDiv = styled.div`
  display: flex;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`

export const CardLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: white;
`

export const TitleCard = styled.h1`
  font-size: 1.5rem;
  margin-top: 20px;
  @media screen {
    @media (max-width: 1000px) {
      margin-top: 5px;
      font-size: 1.8rem;
      display: flex;
      justify-content: center;
    }
  }
`
export const TittleDescription = styled.h2`
  font-size: 1.3rem;

  @media screen {
    @media (max-width: 1000px) {
      width: 60%;
      margin: 0 auto;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  

  @media (max-width: 1000px) {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

    }
`
