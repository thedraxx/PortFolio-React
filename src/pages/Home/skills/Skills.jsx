import React from 'react'
import TextExample from '../../../components/cards/cards'
import { ContainerProjects, ContainerSkills, Proyects, SkillsName, SkillsTitle, TitleSkills } from './style'

const Skills = () => (
    <ContainerSkills>
      <SkillsTitle>
        <TitleSkills>Crafted with love.</TitleSkills>
        <SkillsName>By Matias Toledo</SkillsName>
      </SkillsTitle>
      <ContainerProjects>
        <Proyects>
        <TextExample />   <TextExample />
        </Proyects>
        <Proyects>
        <TextExample />   <TextExample />
        </Proyects>
      </ContainerProjects>

    </ContainerSkills>
)

export default Skills
