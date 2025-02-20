export interface IGift {
  id: number
  name: string
  description: string
}

export type BestFitGiftsArgs = {
  categories: number[]
  numGifts: number
}
