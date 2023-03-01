import Head from 'next/head'
import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import style from './Layout.module.css'

interface PageLayoutProps {
  title: string
  children: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>Octopus Energy - {title}</title>
      </Head>
      <div className={style.page}>
        <Header />
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
