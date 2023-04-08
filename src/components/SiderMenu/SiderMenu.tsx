import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'

import { useRouter } from 'next/router'
import { useState } from 'react'

import { SiderItem } from '../data'

const { Sider } = Layout

function SiderMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  const RouterdefaultSelectedKeys = router.pathname.replace('/', '')

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}> Thanh Tùng</div>
      <Menu
        theme='light'
        defaultSelectedKeys={[RouterdefaultSelectedKeys]}
        mode='inline'
        items={SiderItem}
        onClick={onClick}
      />
    </Sider>
  )
}

export default SiderMenu
