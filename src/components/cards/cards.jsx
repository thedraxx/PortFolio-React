import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { CardLink, ContainerLinks, CustomDiv, ImageCard, TitleCard, TittleDescription } from './style'
import { Link } from 'react-router-dom'

const ProyectTemplate = ({ project }) => {
  const { active } = useSelector((state) => state.isActive)

  return (
    <Card.Body>
      <CustomDiv>
        <Card
          style={{
            width: '30rem',
            margin: '20px',
            backgroundColor: active ? '#212529' : 'white'
          }}
        >
          <Card.Body >
            <ImageCard src={project.src} alt="projects" />
            <Card.Title style={{ color: active ? 'white' : 'black' }}>
              <TitleCard> {project.name}</TitleCard>
            </Card.Title>
            <Card.Text>

              <TittleDescription> {`${project.description}`}</TittleDescription>
            </Card.Text>
            <CardLink>
              <ContainerLinks>
              <Link
                to={project.link}
                style={{
                  color: active ? '#ffffff' : 'black',
                  backgroundColor: active ? '#212529' : 'white',
                  textDecoration: 'none'
                }}
              >
                Preview
              </Link>
              <Link
                to={project.github}
                style={{
                  color: active ? '#ffffff' : 'black',
                  backgroundColor: active ? '#212529' : 'white',
                  textDecoration: 'none'
                }}
              >
                Repository
              </Link>
              </ContainerLinks>

            </CardLink>
          </Card.Body>
        </Card>
      </CustomDiv>
    </Card.Body>
  )
}

export default ProyectTemplate
