import { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDeleteCategoryMutation } from '../../store/categorySlice'
import CustomCard, { CustomCardProps } from './CustomCard'
import { AddCategoryForm } from '../index'
import { ICategory } from '../../interfaces/ICategory'
import { CategoriesLocations } from '../Categories/CategoriesLocations'

interface CustomCategoryProps extends CustomCardProps {
  location: CategoriesLocations
  onCardChecked?: (id?: number) => void
}

const CustomCategory: FC<CustomCategoryProps> = ({ id, name, description, location, onCardChecked }) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const [deleteCategory] = useDeleteCategoryMutation()

  const toggleFormVisible = () => setIsFormVisible((prevState: boolean) => !prevState)
  const onDeleteHandler = () => {
    deleteCategory(Number(id))
  }

  const renderOptions = () => {
    if (location === CategoriesLocations.HOME) {
      return
    }

    if (location === CategoriesLocations.ADMINISTRATION) {
      return (
        <>
          <AddCategoryForm
            isVisible={isFormVisible}
            toggleVisible={toggleFormVisible}
            categoryData={{ id, name, description } as ICategory}
            isUpdate
          />
          <div className='d-flex justify-content-end'>
            <Button variant='outline-primary' size='sm' className='w-20 m-1' onClick={toggleFormVisible}>
              Edit
            </Button>
            <Button variant='outline-danger' size='sm' className='w-20 m-1' onClick={onDeleteHandler}>
              Delete
            </Button>
          </div>
        </>
      )
    }
  }

  return (
    <div className='d-flex flex-column'>
      {renderOptions()}
      <CustomCard key={id} id={id} name={name} description={description} location={location} onCardChecked={onCardChecked} />
    </div>
  )
}

export default CustomCategory
