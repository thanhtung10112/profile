// import MainHeader from '@/components/header/MainHeader'
// import NextSEO from '@/components/shared/NextSEO'
import SiderMenu from '@/components/SiderMenu/SiderMenu'
import { Breadcrumb, Layout } from 'antd'
import { PropsWithChildren, ReactNode } from 'react'

export interface ILayoutProps extends PropsWithChildren {
  seo?: ReactNode
  header?: ReactNode
  footer?: ReactNode
}
const { Header, Content, Footer } = Layout

function MainLayout(props: ILayoutProps) {
  const { children } = props

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />

      <Layout className='site-layout'>
        <Header style={{ padding: 0 }} />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          {children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
