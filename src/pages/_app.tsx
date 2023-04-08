/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingRouter from '@/components/shared/LoadingRouter'
import '@/styles/index.scss'
import { usePageProcess, usePreload } from '@/utils/hooks'
import { ConfigProvider, Layout, theme } from 'antd'

import { NextComponentType, NextPageContext } from 'next'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'

import { ExoticComponent, Fragment, ReactNode, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export type CusAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any> & {
    Layout: ExoticComponent<{
      children?: ReactNode | undefined
    }>
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0
    }
  }
})

export default function App({ Component, pageProps }: CusAppProps) {
  const loadingPage = usePageProcess()

  usePreload(false)

  const content = useMemo(() => {
    const PageLayout = Component.Layout || Fragment

    return (
      <Layout>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Layout>
    )
  }, [Component, pageProps])

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          // locale={locales?.[Router.locale as keyof typeof locales]?.locale}
          theme={{ algorithm: theme.compactAlgorithm }}
        >
          {/* <ModalContextProvider> */}
          <LoadingRouter loading={loadingPage} />
          {content}
          {/* <Analytics /> */}
          {/* </ModalContextProvider> */}
        </ConfigProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextIntlProvider>
  )
}
