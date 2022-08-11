import '../../../styles/home.css'
import 'animate.css'
import React from 'react'
import { ContainerBio, ContainerGeneral, ContainerInfo, ContainerText, ImageProfile, SuperContainer, TextBio, TextTitle } from './styles.jsx'
const Bio = () => (
    // Aca esta es la forma de hacer una animacion con animate.css
    // Saludo de bienvenida
    <SuperContainer>
      <ContainerGeneral>
        <div className=" contenedor content  ">
          {/* Imagen de perfil */}
          <ContainerInfo >
            <div className="w-auto  mt-auto w-100 ">
              <ImageProfile src={'https://i.postimg.cc/Zqjtgpsm/photo-2022-02-18-22-38-30.jpg'} alt="1" className=" ImagenPerfil img-fluid " />
            </div>
              <ContainerText>
              <TextTitle>   FrontEnd <p>Developer</p>   </TextTitle>
              <ContainerBio>
              <TextBio> {` Hi I'm Matias Toledo. A passionate FullStack Developer and student based in Argentina.
                I started my path as a developer almost 2 years ago and I fell in love with the idea of being able to create websites and apps that solve people's problems and at the same time provide them with a good experience. I am a proactive, organized, responsible person, attentive to detail and constantly learning. if you're looking for a developer to add to your team, I'd love to hear from you!`}</TextBio>
              </ContainerBio>
              </ContainerText>
          </ContainerInfo>
        </div>
      </ContainerGeneral>
    </SuperContainer>
)
export default Bio
