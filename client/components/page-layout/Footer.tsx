import { Container } from '../layout'
import style from './Footer.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        Octopus Energy Ltd is a company registered in England and Wales. Registered number:
        09263424. Registered office: 33 Holborn, London, ECIN 2HT. Trading office: 20-24 Broadwick
        Street, London, W1F 8HT
      </Container>
    </footer>
  )
}
