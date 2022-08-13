import styled from 'styled-components'

export const ContainerExperience = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const SubContainerExperience = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;

  @media screen {
    @media (max-width: 1100px) {
      margin: auto;
      align-items: center;
    }
  }
`
export const TitleExperience = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
export const ExperienceSub = styled.h2`
  font-size: 1rem;
`

export const ContainerProjects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: auto;

  @media screen {
    @media (max-width: 1100px) {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin: auto;
    }
  }
`
export const Proyects = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen {
    @media (max-width: 1100px) {
      flex-direction: column;
      margin: auto;
      padding: auto;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ContainerStudies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;

  @media screen {
    @media (max-width: 1100px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const ContainerProject = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 20px;
  border-top: 2px outset #b7b7b7;

  @media screen {
    @media (max-width: 1100px) {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      border-top: 1px outset #2f2f2f;
    }
  }
`
export const TitleProject = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
// export const SubTitleProject = styled.h2`
//   font-size: 1.2rem;
//   font-weight: bold;
// `
export const ContainerLanguages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex: 1;


  @media screen {
    @media (max-width: 1100px) {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }
  }
`
export const Languages = styled.h3`
  font-size: 1rem;
  margin-left: 10px;
  background-color: #d7d7d7;
  padding: 10px;
  border-radius: 10px;
  color: black;
  position: sticky;
`
export const ContainerInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
export const InfoTitle = styled.h1`
  font-size: 1rem;
  text-align: start;
`
