import styled from 'styled-components'

export const ContainerSkills = styled.div`
  width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
export const SkillsTitle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;

    @media screen {
        @media (max-width: 1000px) {
            margin: auto;
            align-items: center;
        }   
    }
`
export const TitleSkills = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
`
export const SkillsName = styled.h2`
    font-size: 1.2rem;
`

export const ContainerProjects = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`
export const Proyects = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
    @media screen {
        @media (max-width: 1000px) {
            flex-direction: column;
            margin: auto;
            padding: auto;
            justify-content: center;
            align-items: center;

        }   
    }

`
