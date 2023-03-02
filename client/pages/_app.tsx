import '../styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps as NextAppProps } from 'next/app'

import { PageLayout } from '@/components/page-layout'
import { basketContext, BasketContextProvider } from '@/context/basket'

const queryClient = new QueryClient()

export type PageProps<T = Record<string, unknown>> = T & {
  title: string
}

type AppProps<P extends PageProps = PageProps> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketContextProvider context={basketContext}>
        <PageLayout title={pageProps.title}>
          <Component {...pageProps} />
        </PageLayout>
      </BasketContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
