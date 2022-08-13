import '../../../styles/home.css'
import React from 'react'
import {
  ContainerBio,
  ContainerGeneral,
  ContainerInfo,
  ContainerText,
  ContentWelcome,
  CustomVideo,
  Enphasis,
  ImageProfile,
  SuperContainer,
  TextBio,
  TextTitle,
  TextWelcome,
  TextSubWelcome,
  ContainerVideo
} from './styles.jsx'
import video from '../../../assets/video/abstract.mp4'

const Bio = () => (
  // Aca esta es la forma de hacer una animacion con animate.css
  // Saludo de bienvenida
  <SuperContainer>
    <ContainerVideo>
    <CustomVideo src={video} autoPlay loop muted />
        <ContentWelcome>
          <TextWelcome>Welcome!</TextWelcome>
          <TextSubWelcome>My name is <Enphasis>Francisco</Enphasis></TextSubWelcome>
        </ContentWelcome>
    </ContainerVideo>

    <ContainerGeneral>
      <div className="contenedor content">
        {/* Imagen de perfil */}

        <ContainerInfo>
          <div className="w-auto  mt-auto w-100 ">
            <ImageProfile
              src={
                'https://i.postimg.cc/Zqjtgpsm/photo-2022-02-18-22-38-30.jpg'
              }
              alt="1"
              className=" ImagenPerfil img-fluid "
            />
          </div>
          <ContainerText>
            <TextTitle>
              {' '}
              FrontEnd <p>Developer</p>{' '}
            </TextTitle>
            <ContainerBio>
              <TextBio>
                {' '}
                {' Hi I\'m Francisco a passionate'} <Enphasis> Frontend Developer</Enphasis> {` and student living in Argentina.
                I started in this world as a developer almost 2 years ago, in 2020 and I  have serious passion for creating intuitive, dynamic user experiences! also I love to learn new things and I'm always looking for new challenges to compete. `}
              </TextBio>
            </ContainerBio>
          </ContainerText>
        </ContainerInfo>
      </div>
    </ContainerGeneral>
  </SuperContainer>
)
export default Bio
