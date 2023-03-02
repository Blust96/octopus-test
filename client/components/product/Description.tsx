import type { Product } from '@/gql/graphql'

import { Container } from '../layout'
import style from './Description.module.css'

interface DescriptionProps {
  product: Product
}

export function Description({ product }: DescriptionProps): JSX.Element {
  return (
    <section className={style.description}>
      <Container>
        <h2>Description</h2>
        <p>{product.description}</p>
      </Container>
    </section>
  )
}
