import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { CardLink, CustomDiv, ImageCard } from './style'
import { Link } from 'react-router-dom'

const ProyectTemplate = ({ project }) => {
  const { active } = useSelector((state) => state.isActive)

  return (
    <>
      <CustomDiv>
        <Card
          style={{
            width: '30rem',
            margin: '20px',
            backgroundColor: active ? '#212529' : 'white'
          }}
        >
          <Card.Body>
            <ImageCard src={project.src} alt="projects" />
            <Card.Title style={{ color: active ? 'white' : 'black' }}>
              {project.name}
            </Card.Title>
            <Card.Text>{`${project.description}`}</Card.Text>
            <CardLink>
              <Link to={project.link} style={{ color: active ? '#ffffff' : 'black', backgroundColor: active ? '#212529' : 'white', textDecoration: 'none' }}>Preview</Link>
              <Link to={project.github} style={{ color: active ? '#ffffff' : 'black', backgroundColor: active ? '#212529' : 'white', textDecoration: 'none' }}>Repository</Link>
            </CardLink>
          </Card.Body>
        </Card>
      </CustomDiv>
    </>
  )
}

export default ProyectTemplate
