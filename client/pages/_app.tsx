import '../styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps as NextAppProps } from 'next/app'

import { PageLayout } from '@/components/page-layout'

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
      <PageLayout title={pageProps.title}>
        <Component {...pageProps} />
      </PageLayout>
    </QueryClientProvider>
  )
}

export default MyApp
