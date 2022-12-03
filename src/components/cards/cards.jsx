import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { CardLink, ContainerLinks, CustomDiv, ImageCard, TitleCard, TittleDescription } from './style'

const ProyectTemplate = ({ project }) => {
  const { active } = useSelector((state) => state.isActive)

  return (
    <Card.Body>
      <CustomDiv>
        <Card
          style={{
            width: '25rem',
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
              <a
                href={project.link}
                style={{
                  color: active ? '#ffffff' : 'black',
                  backgroundColor: active ? '#212529' : 'white',
                  textDecoration: 'none'
                }}
              >
                Preview
              </a>
              <a
                href={project.github}
                style={{
                  color: active ? '#ffffff' : 'black',
                  backgroundColor: active ? '#212529' : 'white',
                  textDecoration: 'none'
                }}
              >
                Repository
              </a>
              </ContainerLinks>

            </CardLink>
          </Card.Body>
        </Card>
      </CustomDiv>
    </Card.Body>
  )
}

export default ProyectTemplate
