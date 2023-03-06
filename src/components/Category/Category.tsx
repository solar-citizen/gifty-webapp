import { FC } from 'react'

type CategoryProps = {
  id: number
  name: string
}

const Category: FC<CategoryProps> = ({ id, name }) => {
  console.log('Category Component')

  return <div key={id}>{name}</div>
}

export default Category
