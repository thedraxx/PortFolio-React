import React from 'react'
import { useSelector } from 'react-redux'
import ProyectTemplate from '../../../components/cards/cards'
import {
  ContainerProjects,
  ContainerSkills,
  Proyects,
  SkillsName,
  SkillsTitle,
  TitleSkills
} from './style'

const Skills = () => {
  const { projects } = useSelector((state) => state.projects)
  return (
    <ContainerSkills>
      <SkillsTitle>
        <TitleSkills>Some of my projects</TitleSkills>
        <SkillsName>By Francisco Cerrano</SkillsName>
      </SkillsTitle>
      <ContainerProjects>
        {projects.map((project) => (
          <Proyects key={project.id}>
            <ProyectTemplate project={project} />
          </Proyects>
        ))}
     </ContainerProjects>
    </ContainerSkills>
  )
}

export default Skills
