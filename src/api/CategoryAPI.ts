import axios, { AxiosResponse } from 'axios'
import { ICategoryCreateRequest, ICategoryResponse } from '../interfaces/ICategory'

export default class CategoryAPI {
  static getAll = async (): Promise<AxiosResponse<ICategoryResponse>> =>
    axios.get<ICategoryResponse>('http://localhost:8080/api/categories/all')

  static add = async (name: string): Promise<AxiosResponse<ICategoryCreateRequest>> =>
    axios.post<ICategoryCreateRequest>('http://localhost:8080/api/categories/add', name)
}
