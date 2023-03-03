import type { Product } from '@/gql/graphql'

import { Container } from '../layout'
import style from './Specifications.module.css'

interface SpecificationsProps {
  product: Product
}

export function Specifications({ product }: SpecificationsProps): JSX.Element {
  const dimensions = [product.height, product.length, product.width].join(' x ')

  return (
    <section className={style.specifications}>
      <Container>
        <h2>Specifications</h2>
        <div className={style.content}>
          <p>
            <span>Brand</span>
            <span>{product.brand}</span>
          </p>
          <p>
            <span>Item weight (g)</span>
            <span>{product.weight}</span>
          </p>
          <p>
            <span>Dimensions (cm)</span>
            <span>{dimensions}</span>
          </p>
          <p>
            <span>Item Model number</span>
            <span>{product.model_code}</span>
          </p>
          <p>
            <span>Colour</span>
            <span>{product.colour}</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
