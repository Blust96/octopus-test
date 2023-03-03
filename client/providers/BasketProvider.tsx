import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { createContext, useMemo, useState } from 'react'

import type { Product } from '@/gql/graphql'

interface BasketContext {
  itemCount: number
  addItem: (product: Product, quantity: number) => void
}

const basketContext = createContext<BasketContext>({
  itemCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItem: () => {},
})

interface BasketItem {
  quantity: number
  product: Product
}

interface BasketContextProviderProps {
  context: typeof basketContext
  children: ReactNode
}

export function BasketContextProvider({ context, children }: BasketContextProviderProps) {
  const [items, setItems] = useState<BasketItem[]>([])

  const itemCount = useMemo(() => items.reduce((count, item) => count + item.quantity, 0), [items])

  const addItem = useCallback(
    (product: Product, quantity: number): void => {
      const newItems = [...items]
      const existingProductIdx = newItems.findIndex((p) => p.product.id === product.id)

      if (existingProductIdx !== -1) {
        newItems[existingProductIdx].quantity += quantity
      } else {
        newItems.push({ product, quantity })
      }

      setItems(newItems)
    },
    [items],
  )

  return <context.Provider value={{ itemCount, addItem }}>{children}</context.Provider>
}

export { basketContext }
