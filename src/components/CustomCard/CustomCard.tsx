import { FC } from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

type CustomCardProps = {
  id?: number
  name: string
  description?: string
}

const CustomCard: FC<CustomCardProps> = ({ id, name, description }) => {
  const navigate = useNavigate()
  return (
    <Card border='dark' style={{ width: '18rem', minHeight: '186px' }} onClick={() => navigate(`/categories/${id}`)}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
