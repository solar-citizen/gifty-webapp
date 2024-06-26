import { useCallback, useState } from 'react'
import { useLazyGetBestFitGiftsQuery } from '../store/giftSlice'

const NUMBER_OF_GIFTS = 5 // ToDo => store/edit in db

export const useCheckedItems = () => {
  const [checkedItemsIds, setCheckedItems] = useState<number[]>([])

  const [getBestFitGifts, { data: bestFitGifts, isLoading: isBestGiftsLoading, isError: isBestGiftsError }] =
    useLazyGetBestFitGiftsQuery()

  const handleCheckedItem = (id?: number) => {
    if (!!id && checkedItemsIds.includes(id)) {
      setCheckedItems(prevCheckedItems => prevCheckedItems.filter(item => item !== id))
    } else {
      !!id && setCheckedItems(prevCheckedItems => [...prevCheckedItems, id])
    }
  }

  const fetchBestFitGifts = useCallback(() => {
    if (checkedItemsIds.length > 0) getBestFitGifts({ categories: checkedItemsIds, numGifts: NUMBER_OF_GIFTS })
  }, [checkedItemsIds, getBestFitGifts])

  return { checkedItemsIds, handleCheckedItem, bestFitGifts, isBestGiftsLoading, isBestGiftsError, fetchBestFitGifts }
}
