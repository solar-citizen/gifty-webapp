import { FC, useState } from 'react'
import CategoryAPI from './api/CategoryAPI'
import styles from './App.module.scss'
import Button from './components/Button/Button'
import { PRIMARY, DANGER } from './components/Button/ButtonCategories'
import Category from './components/Category/Category'
import { ICategory } from './interfaces/ICategory'

const App: FC = () => {
  const [categories, setCategories] = useState<any>([]) // ---> temp any
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true)

  const getAllCategoriesHandler = async () => {
    try {
      setIsLoading(true)
      const res = await CategoryAPI.getAll()
      setCategories(res.data)
    } catch (error) {
      console.error(error) // ---> handle error later
    } finally {
      setIsLoading(false)
      setIsButtonVisible(false)
    }
  }

  const resetHandler = () => {
    setIsButtonVisible(true)
    setCategories([])
  }

  return (
    <div className={styles.App}>
      {!isLoading ? (
        categories?.map(({ id, name }: ICategory) => (
          <Category
            id={id}
            name={name}
          />
        ))
      ) : (
        <span>Loading...</span>
      )}

      {isButtonVisible && (
        <Button
          onClick={getAllCategoriesHandler}
          category={PRIMARY}
        >
          Get All Categories
        </Button>
      )}

      {!isButtonVisible && (
        <Button
          onClick={resetHandler}
          category={DANGER}
        >
          Reset
        </Button>
      )}
    </div>
  )
}

export default App
