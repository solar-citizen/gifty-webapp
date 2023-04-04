import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'
import styles from './Home.module.scss'

const Home: FC = () => {
  const numbers = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <main>
      <span>This is Home Page</span>
      <div className={styles.Cards}>
        {numbers.map(n => {
          return (
            <Card border='dark' style={{ width: '18rem' }} key={n}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card {n}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </main>
  )
}

export default Home
