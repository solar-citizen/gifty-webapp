import { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useAddCategoryMutation } from '../../store/categorySlice'
import { ICategory } from '../../interfaces/ICategory'

type AddCategoryFormProps = {
  isVisible: boolean
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({ isVisible }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICategory>({
    defaultValues: {
      name: '',
      description: '',
    },
  })
  const [addCategory] = useAddCategoryMutation()

  const onSubmit = handleSubmit((data: ICategory) => {
    addCategory(data)
    reset()
  })

  return (
    <>
      {isVisible && (
        <div>
          <h2>Add a new category</h2>
          <form onSubmit={onSubmit} className='d-flex flex-column align-items-center w-100'>
            <span>{errors.name?.message}</span>
            <input
              type='text'
              {...register('name', { required: 'Required field.' })}
              placeholder='Category Name'
              className='py-1 my-2 w-25'
            />

            <span>{errors.description?.message}</span>
            <input
              type='text'
              {...register('description', {
                maxLength: {
                  value: 200,
                  message: 'Description cannot be longer than 200 symbols.',
                },
              })}
              placeholder='Category Description'
              className='py-1 my-2 w-25'
            />

            <Button as='input' type='submit' value='Submit' variant='outline-success' />
          </form>
        </div>
      )}
    </>
  )
}

export default AddCategoryForm
