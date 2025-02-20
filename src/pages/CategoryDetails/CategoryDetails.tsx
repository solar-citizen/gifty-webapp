import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../../store/categorySlice'
import { CustomCard } from '../../components'

const CategoryDetails: FC = () => {
  const { categoryId } = useParams()
  const { data: category, isLoading, isSuccess, isError, error } = useGetCategoryQuery(Number(categoryId))

  return (
    <>
      {category ? (
        <>
          {isLoading && <span>Loading...</span>}
          {isSuccess && <CustomCard id={category?.id} name={category?.name} description={category?.description} />}
          {isError && error && <span>Error while loading category.</span>}
        </>
      ) : (
        <>
          <h1>Service Details</h1>
          <span>Couldn't find category.</span>
        </>
      )}
    </>
  )
}

export default CategoryDetails
