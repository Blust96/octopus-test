import type { GetStaticProps } from 'next'

import { Container } from '@/components/layout'

import type { PageProps } from './_app'

export default function Home() {
  return (
    <section className="home">
      <Container>
        <figure>
          <img src="https://static.octopuscdn.com/logos/logo.svg" alt="Octopus Energy Logo" />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{' '}
          <code>client/pages/product.js</code>
        </p>
      </Container>
    </section>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return { props: { title: 'Home' } }
}
