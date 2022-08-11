import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { CustomDiv, ImageCard } from './style'

const ProyectTemplate = ({ project }) => {
  const { active } = useSelector(state => state.isActive)

  return (
<>
    <CustomDiv>
    <Card style={{ width: '23rem', margin: '20px', backgroundColor: active ? '#212529' : 'white' }}>
      <Card.Body >
        <ImageCard
          src={'https://i.postimg.cc/prGHFRvj/cripto.png'}
          alt="projects"
        />
        <Card.Text>
          {`${project.description}`}
        </Card.Text>
        <Card.Link href={`${project.link}`}>Check Demo</Card.Link>
        <Card.Link href={`${project.github}`}>Repository</Card.Link>
      </Card.Body>
    </Card>
    </CustomDiv>
  </>
  )
}

export default ProyectTemplate
