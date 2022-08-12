import styled from 'styled-components'

export const SuperContainer = styled.div`
    margin: auto;
    width: 100%;
`

export const ContainerGeneral = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:auto;
    margin-top: -100px;
    @media screen {
        @media (max-width: 1000px) {
            display: flex;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin:auto;
        }   
    }

`

export const ImageProfile = styled.img`
    width: 70%;
    border-radius: 100px;
    margin: auto;
    margin-left:100px;
    @media screen {
        @media (max-width: 1000px) {
            width: 300px;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            margin: auto;
        }   
    }
`

export const TextTitle = styled.h1`
    font-size: 6rem;
    margin: 10;
    padding: 0;
    font-weight: bold;

    @media screen {
        @media (max-width: 1000px) {
            font-size: 50px;
            text-align: center;
            margin-top: 20px;
            padding: 0;
        }   
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex: 1;
    width: 100%;    
    margin: auto;
    padding: auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

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
export const TextBio = styled.h3`
    font-size: 1.1rem;
`

export const ContainerBio = styled.div`
    display: flex;
    flex: 1;
    width:400px;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen {
        @media (max-width: 1000px) {
            width:70%;
        }   
    }
`

export const ContainerText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen {
        @media (max-width: 1000px) {
            margin-top:5px
        }   
    }
`
