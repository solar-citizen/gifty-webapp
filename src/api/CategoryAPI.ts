import axios from './axios'
import { AxiosResponse } from 'axios'
import { ICategoryCreateRequest, ICategoryResponse } from '../interfaces/ICategory'

export default class CategoryAPI {
  static getAll = async (): Promise<AxiosResponse<ICategoryResponse>> => axios.get<ICategoryResponse>('/categories/all')

  static add = async (name: string): Promise<AxiosResponse<ICategoryCreateRequest>> =>
    axios.post<ICategoryCreateRequest>('/categories/add', name)
}
