import { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useAddCategoryMutation } from '../../store/categorySlice'

type AddCategoryFormProps = {
  isVisible: boolean
}

export type FormDataProps = {
  categoryName: string
  categoryDescription?: string
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({ isVisible }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      categoryName: '',
      categoryDescription: '',
    },
  })
  const [addCategory, { isLoading }] = useAddCategoryMutation()

  const onSubmit = handleSubmit((data: FormDataProps) => addCategory(data))

  return (
    <>
      {isVisible &&
        (isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            <h2>Add a new category</h2>
            <form onSubmit={onSubmit} className='d-flex flex-column align-items-center w-100'>
              <span>{errors.categoryName?.message}</span>
              <input
                type='text'
                {...register('categoryName', { required: 'Required field.' })}
                placeholder='Category Name'
                className='py-1 my-2 w-25'
              />

              <span>{errors.categoryDescription?.message}</span>
              <input
                type='text'
                {...register('categoryDescription', {
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
          </>
        ))}
    </>
  )
}

export default AddCategoryForm
