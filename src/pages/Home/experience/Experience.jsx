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
  SubTitleProject,
  TitleExperience,
  TitleProject
} from './style'

const Experience = () => (
  <ContainerExperience >
    <SubContainerExperience >
      <TitleExperience>Experience.</TitleExperience>
      <ExperienceSub>a little tour of my traing studies</ExperienceSub>

      <ContainerStudies>
        <ContainerProject>
          <TitleProject>FullStack Developer</TitleProject>
          <SubTitleProject>APX</SubTitleProject>
          <ContainerLanguages>
            <Languages>React</Languages>
            <Languages>Typescript</Languages>
            <Languages>Node.js</Languages>
            <Languages>Git</Languages>
            <Languages>SQL</Languages>
            <Languages>NoSQL</Languages>
            <Languages>HTML</Languages>
            <Languages>CSS</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              In this career I learned the fundamentals of object-oriented
              programming, developing webapps with Javascript, Typescript and
              React, in which I applied knowledge of state management, hooks,
              react-router, webpack, babel, swr and server-side-rendering. I
              also learned how to deploy REST APIS with Node JS and Typescript
              on top of Express.js and Next.js. Following the MVC design pattern
              and using non-relational databases such as Firestore/Firebase as
              well as relational databases such as PostgreSQL.
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>

        <ContainerProject>
          <TitleProject>FullStack Developer</TitleProject>
          <SubTitleProject>APX</SubTitleProject>
          <ContainerLanguages>
            <Languages>React</Languages>
            <Languages>Typescript</Languages>
            <Languages>Node.js</Languages>
            <Languages>Git</Languages>
            <Languages>SQL</Languages>
            <Languages>NoSQL</Languages>
            <Languages>HTML</Languages>
            <Languages>CSS</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              In this career I learned the fundamentals of object-oriented
              programming, developing webapps with Javascript, Typescript and
              React, in which I applied knowledge of state management, hooks,
              react-router, webpack, babel, swr and server-side-rendering. I
              also learned how to deploy REST APIS with Node JS and Typescript
              on top of Express.js and Next.js. Following the MVC design pattern
              and using non-relational databases such as Firestore/Firebase as
              well as relational databases such as PostgreSQL.
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>

        <ContainerProject>
          <TitleProject>FullStack Developer</TitleProject>
          <SubTitleProject>APX</SubTitleProject>
          <ContainerLanguages>
            <Languages>React</Languages>
            <Languages>Typescript</Languages>
            <Languages>Node.js</Languages>
            <Languages>Git</Languages>
            <Languages>SQL</Languages>
            <Languages>NoSQL</Languages>
            <Languages>HTML</Languages>
            <Languages>CSS</Languages>
          </ContainerLanguages>
          <ContainerInfo>
            <InfoTitle>
              In this career I learned the fundamentals of object-oriented
              programming, developing webapps with Javascript, Typescript and
              React, in which I applied knowledge of state management, hooks,
              react-router, webpack, babel, swr and server-side-rendering. I
              also learned how to deploy REST APIS with Node JS and Typescript
              on top of Express.js and Next.js. Following the MVC design pattern
              and using non-relational databases such as Firestore/Firebase as
              well as relational databases such as PostgreSQL.
            </InfoTitle>
          </ContainerInfo>
        </ContainerProject>
      </ContainerStudies>
    </SubContainerExperience>
  </ContainerExperience>
)

export default Experience
