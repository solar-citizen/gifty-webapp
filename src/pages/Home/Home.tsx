import { FC } from 'react'
import { Categories } from '../../components'
import { CategoriesLocations } from '../../components/Categories/CategoriesLocations'
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <main>
      <div className='container-fluid w-75'>
        <h1>Home</h1>
        <div className={styles.CardsContainer}>
          <Categories location={CategoriesLocations.HOME} />
        </div>
      </div>
    </main>
  )
}

export default Home
