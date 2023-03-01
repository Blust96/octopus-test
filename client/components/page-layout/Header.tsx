import { Container } from '../layout'
import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.content}>
          <figure>
            <img src="/octopus-logo.svg" alt="Octopus Energy Logo" className={style.logo} />
          </figure>
          <figure>
            <img src="/basket.svg" alt="Basket" className={style.basket} />
          </figure>
        </div>
      </Container>
    </header>
  )
}
