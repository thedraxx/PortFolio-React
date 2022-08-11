import Card from 'react-bootstrap/Card'

const TextExample = () => (
    <>
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
          <img src="data:image/png;base64,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" alt="" />
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
)

export default TextExample