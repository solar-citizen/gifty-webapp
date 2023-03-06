import { FC } from 'react'

type CategoryProps = {
  id: number
  name: string
}

const Category: FC<CategoryProps> = ({ id, name }) => {
  return <li key={id}>{name}</li>
}

export default Category
