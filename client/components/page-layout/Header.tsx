import { useContext } from 'react'

import { basketContext } from '@/providers/BasketProvider'

import { Container } from '../layout'
import style from './Header.module.css'

export function Header() {
  const { itemCount } = useContext(basketContext)

  return (
    <header className={style.header}>
      <Container>
        <div className={style.content}>
          <figure>
            <img src="/octopus-logo.svg" alt="Octopus Energy Logo" className={style.logo} />
          </figure>
          <figure className={style.basket}>
            <img src="/basket.svg" alt="Basket" className={style.basket__img} />
            {itemCount > 0 && (
              <span title="Basket items" className={style.basket__badge}>
                {itemCount}
              </span>
            )}
          </figure>
        </div>
      </Container>
    </header>
  )
}
