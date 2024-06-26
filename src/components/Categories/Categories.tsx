import { FC, useState } from 'react'
import { ICategory } from '../../interfaces/ICategory'
import { useGetCategoriesQuery } from '../../store/categorySlice'
import { CustomCategory } from '../index'
import Button from 'react-bootstrap/Button'
import { AddCategoryForm } from '../index'
import styles from '../../pages/Home/Home.module.scss'
import stylesCat from './Categories.module.scss'
import { CategoriesLocations } from './CategoriesLocations'
import { useCheckedItems } from '../../hooks/useCheckedItems'

type CategoriesProps = {
  location: CategoriesLocations
}

const Categories: FC<CategoriesProps> = ({ location }) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const { checkedItemsIds, handleCheckedItem, fetchBestFitGifts } = useCheckedItems()
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()

  console.log(checkedItemsIds)

  const renderOptions = () => {
    if (location === CategoriesLocations.HOME) {
      return <Button onClick={submitCategoriesHandler}>Submit</Button>
    }

    if (location === CategoriesLocations.ADMINISTRATION) {
      return (
        <>
          <AddCategoryForm isVisible={isFormVisible} toggleVisible={toggleFormVisible} />
          <div className='align-self-end'>
            <Button variant='success' onClick={toggleFormVisible}>
              + Add Category
            </Button>
          </div>
        </>
      )
    }
  }

  const toggleFormVisible = () => {
    setIsFormVisible((prevState: boolean) => !prevState)
  }

  const submitCategoriesHandler = () => fetchBestFitGifts()

  return (
    <div className={stylesCat.Categories}>
      {isLoading && <span>Loading...</span>}
      {renderOptions()}
      <div className={styles.CardsContainer}>
        {isSuccess &&
          categories?.map(({ id, name, description }: ICategory) => (
            <CustomCategory
              key={`${id}-${name}`}
              id={id}
              name={name}
              description={description}
              location={location}
              onCardChecked={handleCheckedItem}
            />
          ))}
      </div>
      {isError && error && <span>Error while loading categories.</span>}
    </div>
  )
}

export default Categories
