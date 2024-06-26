import { FC, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { CategoriesLocations } from '../Categories/CategoriesLocations'

export interface CustomCardProps {
  id?: number
  name: string
  description?: string
  location?: CategoriesLocations
  onCardChecked?: (id?: number) => void
}

const CustomCard: FC<CustomCardProps> = ({ id, name, description, location, onCardChecked }) => {
  const [isChecked, setIsChecked] = useState(false)
  // const navigate = useNavigate()
  const onChangeHandler = (e: any) => {
    console.log(e.target.id)

    e.preventDefault()
    e.stopPropagation()
    setIsChecked((prevState: boolean) => !prevState)
    !!onCardChecked && onCardChecked(id)
  }

  return (
    <Card
      border='dark'
      style={{ width: '18rem', minHeight: '186px', zIndex: 1, position: 'relative' }}
      // onClick={() => navigate(`/categories/${id}`)}
    >
      <Card.Body style={{ zIndex: 2, position: 'relative' }}>
        {location === CategoriesLocations.HOME && (
          <input
            type='checkbox'
            checked={isChecked}
            onChange={e => onChangeHandler(e)}
            style={{ position: 'absolute', zIndex: 3, left: 0, top: 0, cursor: 'pointer', pointerEvents: 'auto' }}
            id={`checkbox-${id}`}
          />
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
