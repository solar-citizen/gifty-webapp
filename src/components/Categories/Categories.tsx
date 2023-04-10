import { FC, useState } from 'react'
import { ICategory } from '../../interfaces/ICategory'
import { useGetCategoriesQuery } from '../../store/categorySlice'
import CustomCard from '../CustomCard/CustomCard'
import Button from 'react-bootstrap/Button'
import { AddCategoryForm } from '../index'
import styles from '../../pages/Home/Home.module.scss'
import stylesCat from './Categories.module.scss'

const Categories: FC = () => {
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const toggleFormVisible = () => {
    setIsFormVisible((prevState: boolean) => !prevState)
  }

  return (
    <div className={stylesCat.Categories}>
      <AddCategoryForm isVisible={isFormVisible} />
      <div className='align-self-end'>
        <Button variant='success' onClick={toggleFormVisible}>
          + Add Category
        </Button>
      </div>
      {isLoading && <span>Loading...</span>}
      <div className={styles.CardsContainer}>
        {isSuccess &&
          categories?.map(({ id, name, description }: ICategory) => (
            <CustomCard key={id} id={id} name={name} description={description} />
          ))}
      </div>
      {isError && error && <span>Error while loading categories.</span>}
    </div>
  )
}

export default Categories
