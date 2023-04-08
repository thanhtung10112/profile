import MainLayout from '@/layouts/MainLayout'

import Home from './home'

const Page = () => {
  return <Home />
}

Page.Layout = MainLayout

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: 'home'
    },
    props: {}
  }
}

export default Page
