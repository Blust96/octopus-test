import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Product from '@/components/product'
import { API_ENDPOINT } from '@/config/api'
import { graphql } from '@/gql'
import type { QueryProductByIdQuery } from '@/gql/graphql'

import type { PageProps } from './_app'

type ProductPageProps = PageProps<{ product: QueryProductByIdQuery }>

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

const getProductById = async (id: string) => request(API_ENDPOINT, queryProductById, { id })

export default function ProductPage({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = useQuery<QueryProductByIdQuery>(['product'], async () => getProductById('1'), {
    initialData: product,
  })

  return (
    <article>
      <Product.Header product={data.Product} />
      <Product.Description product={data.Product} />
      <Product.Specifications product={data.Product} />
    </article>
  )
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async () => {
  const product = await getProductById('1')
  return { props: { product, title: product.Product?.name || '' } }
}
