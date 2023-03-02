import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import ProductLayout from '@/components/product'
import { API_ENDPOINT } from '@/config/api'
import { graphql } from '@/gql'
import type { Product } from '@/gql/graphql'

import type { PageProps } from './_app'

type ProductPageProps = PageProps<{ initialProduct: Product | undefined | null }>

const queryProductById = graphql(`
  query queryProductById($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`)

const getProductById = async (id: string) => {
  const response = await request(API_ENDPOINT, queryProductById, { id })
  return response.Product
}

export default function ProductPage({
  initialProduct,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = useQuery(['product'], async () => getProductById('1'), {
    initialData: initialProduct,
  })

  if (!data) {
    return null
  }

  return (
    <article>
      <ProductLayout.Header product={data} />
      <ProductLayout.Description product={data} />
      <ProductLayout.Specifications product={data} />
    </article>
  )
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async () => {
  const initialProduct = await getProductById('1')

  if (!initialProduct) {
    return { redirect: { destination: '/404', permanent: false } }
  }

  return { props: { initialProduct, title: initialProduct.name } }
}
