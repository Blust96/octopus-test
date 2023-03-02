import type { Product } from '@/gql/graphql'

import { Button } from '../elements'
import { Container } from '../layout'
import style from './Header.module.css'

interface HeaderProps {
  product: Product
}

export function Header({ product }: HeaderProps) {
  const infos = `${product.power} // Packet of ${product.quantity}`

  const decrementQuantity = (): void => {
    // TODO: decrement quantity
  }

  const incrementQuantity = (): void => {
    // TODO: increment quantity
  }

  return (
    <header className={style.header}>
      <Container>
        <div className={style.content}>
          <figure className={style.image}>
            <img src="/philips-plumen.jpg" alt={product.name} />
          </figure>

          <div className={style.details}>
            <h1>{product.name}</h1>
            <span className={style.infos}>{infos}</span>

            <div className={style.quantity}>
              <span className={style.price}>£{product.price}</span>

              <div className={style.input}>
                <span className={style.input__label}>Qty</span>
                <Button onClick={decrementQuantity} className={style.input__cta}>
                  -
                </Button>
                <span className={style.input__value}>1</span>
                <Button onClick={incrementQuantity} className={style.input__cta}>
                  +
                </Button>
              </div>
            </div>

            <Button>Add to cart</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
