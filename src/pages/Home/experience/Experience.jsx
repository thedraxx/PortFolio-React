import React from 'react'
import {
  ContainerExperience,
  ContainerInfo,
  ContainerLanguages,
  ContainerProject,
  ContainerStudies,
  ExperienceSub,
  InfoTitle,
  Languages,
  SubContainerExperience,
  // SubTitleProject,
  TitleExperience,
  TitleProject
} from './style'

const Experience = () => (
  <ContainerExperience>
    <SubContainerExperience>
      <TitleExperience>Experience.</TitleExperience>
      <ExperienceSub>a little tour of my traing studies</ExperienceSub>
      <ContainerStudies>
        <ContainerProject>
          <TitleProject>FrontEnd Developer</TitleProject>
          <ContainerLanguages>
            <Languages>Javascript</Languages>
            <Languages>HTML5</Languages>
            <Languages>CSS</Languages>
            <Languages>Git</Languages>
            <Languages>Photoshop</Languages>
            <Languages>Premiere</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              In this first stage of my studies, I started learning with the
              fundamentals of HTML5, CSS & JavaScript, also I started using
              tools like Trello, photoshop & premiere also learned how to use
              APIs for consume, this was a great step for me and at this stage I
              also began to fall in love with this whole world.
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>

        <ContainerProject>
          <TitleProject>React Developer</TitleProject>
          <ContainerLanguages>
            <Languages>React</Languages>
            <Languages>Redux</Languages>
            <Languages>SCSS</Languages>
            <Languages>Styled-Component</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              In this Second Stage I started learning React JS, this was a great
              experience and I fall in love with this technology, I was
              understanding technology like React-Redux, the use of store,
              Styled-Components for the styles.
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>

        <ContainerProject>
          <TitleProject>React Native Developer</TitleProject>
          <ContainerLanguages>
            <Languages>React Native</Languages>
            <Languages>Typescript</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              {`Today I'm learning React-Native, I have a lot of ideas and a lot
              of things that I want to do with this, the simple idea of made app
              for the people makes me happy and I really want to do more and
              more!`}
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>
      </ContainerStudies>
    </SubContainerExperience>
  </ContainerExperience>
)

export default Experience
