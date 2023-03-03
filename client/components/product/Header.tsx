import { useContext, useState } from 'react'

import type { Product } from '@/gql/graphql'
import { basketContext } from '@/providers/BasketProvider'

import { Button } from '../elements'
import { Container } from '../layout'
import style from './Header.module.css'

const DEFAULT_QUANTITY = 1

interface HeaderProps {
  product: Product
}

export function Header({ product }: HeaderProps) {
  const { addItem } = useContext(basketContext)
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY)

  const infos = `${product.power} // Packet of ${product.quantity}`

  const decrementQuantity = (): void => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  const incrementQuantity = (): void => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const onProductAddition = (): void => {
    addItem(product, quantity)
    setQuantity(DEFAULT_QUANTITY)
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
                <Button
                  disabled={quantity === 1}
                  onClick={decrementQuantity}
                  className={style.input__cta}
                >
                  -
                </Button>
                <span title="Current quantity" className={style.input__value}>
                  {quantity}
                </span>
                <Button onClick={incrementQuantity} className={style.input__cta}>
                  +
                </Button>
              </div>
            </div>

            <Button onClick={onProductAddition}>Add to cart</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
