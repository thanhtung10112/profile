/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// loading page
export const usePreload = (loading: boolean) => {
  useEffect(() => {
    const preloader = document.querySelector('.spinner-box')

    if (!preloader) {
      return
    }

    if (!loading) {
      const onTransitionEnd = (event: Event) => {
        if (event instanceof TransitionEvent && event.propertyName === 'opacity' && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader)
        }
      }

      if (getComputedStyle(preloader).opacity === '0' && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader)
      }

      setTimeout(() => {
        preloader.addEventListener('transitionend', onTransitionEnd)
        preloader.classList.add('spinner-box__fade')
      }, 2000)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
}

export const usePageProcess = () => {
  const router = useRouter()
  //   const { closeAllModal } = useModalHandle()

  const [loading, setLoading] = useState<boolean>(false)
  const [currentPathname, setCurrentPathname] = useState<string | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const handleRouteChange = (pathname: string, query: any) => {
      setLoading(true)
      setCurrentPathname(pathname)
    }

    router.events.on('routeChangeStart', (url: any) => {
      const { pathname, query } = url
      const nextPathname = url.pathname

      if (pathname === currentPathname && !(query && Object.keys(query).length)) {
        setLoading(false)
      } else {
        handleRouteChange(nextPathname, query)
      }
    })
    router.events.on('routeChangeComplete', () => {
      setLoading(false)
      //   closeAllModal()
    })
    router.events.on('routeChangeError', () => setLoading(false))

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', () => setLoading(false))
      router.events.off('routeChangeError', () => setLoading(false))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading
}

// useQueryString
// export const useQueryString = () => {
//   const [searchParams] = useSearchParams()
//   const searchParamsObject = Object.fromEntries([...searchParams])
//   return searchParamsObject
// }
