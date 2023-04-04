import { FC } from 'react'
import { ICategory } from '../../interfaces/ICategory'
import { useGetCategoriesQuery } from '../../api/apiSlice'
import Card from 'react-bootstrap/Card'
import styles from '../../pages/Home/Home.module.scss'

const Categories: FC = () => {
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {isSuccess &&
        categories?.map(({ id, name }: ICategory) => (
          <div className={styles.Cards} key={id}>
            <Card border='dark' style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      {isError && error && <span>error</span>}
    </>
  )
}

export default Categories
