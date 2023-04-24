import { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDeleteCategoryMutation } from '../../store/categorySlice'
import CustomCard, { CustomCardProps } from './CustomCard'
import { AddCategoryForm } from '../index'
import { ICategory } from '../../interfaces/ICategory'

interface CustomCategoryProps extends CustomCardProps {
  isAdmin: boolean
}

const CustomCategory: FC<CustomCategoryProps> = ({ id, name, description, isAdmin }) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const [deleteCategory] = useDeleteCategoryMutation()

  const toggleFormVisible = () => setIsFormVisible((prevState: boolean) => !prevState)
  const onDeleteHandler = () => {
    deleteCategory(Number(id))
  }

  console.log(id)

  return (
    <div className='d-flex flex-column'>
      {isAdmin && (
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
      )}
      <CustomCard key={id} id={id} name={name} description={description} />
    </div>
  )
}

export default CustomCategory
