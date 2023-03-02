import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render } from '@testing-library/react'

import { PageLayout } from '@/components/page-layout'
import { basketContext, BasketContextProvider } from '@/context/basket'
import type { Product } from '@/gql/graphql'

import ProductPage from '../pages/product'

const mockProduct: Product = {
  id: '1',
  name: 'Energy saving light bulb',
  power: '25W',
  description:
    'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
  price: 12.99,
  quantity: 4,
  brand: 'Philips',
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: 'E27 ES',
  colour: 'Cool daylight',
  img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
}

const queryClient = new QueryClient()

function Subject() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketContextProvider context={basketContext}>
        <PageLayout title={mockProduct.name}>
          <ProductPage initialProduct={mockProduct} title={mockProduct.name} />
        </PageLayout>
      </BasketContextProvider>
    </QueryClientProvider>
  )
}

test('should be able to increase and decrease product quantity', async () => {
  const { getByText, getByTitle } = render(<Subject />)

  const increaseQuantity = getByText('+')
  const decreaseQuantity = getByText('-')

  const currentQuantity = getByTitle('Current quantity')
  expect(currentQuantity).toHaveTextContent('1')

  expect(decreaseQuantity).toBeDisabled()

  fireEvent.click(increaseQuantity)
  expect(currentQuantity).toHaveTextContent('2')

  fireEvent.click(decreaseQuantity)
  expect(currentQuantity).toHaveTextContent('1')
})

test('should be able to add items to the basket', async () => {
  const { getByText, getByTitle } = render(<Subject />)

  const increaseQuantity = getByText('+')

  const currentQuantity = getByTitle('Current quantity')

  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)

  expect(currentQuantity).toHaveTextContent('4')

  const addToBasketElement = getByText('Add to cart')
  fireEvent.click(addToBasketElement)

  const basketItems = getByTitle('Basket items')
  expect(basketItems).toHaveTextContent('4')
})
