import { AppstoreOutlined, BranchesOutlined, CloseOutlined, FileOutlined, UserOutlined } from '@ant-design/icons'

function HeaderProfile() {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Thanh Tùng
        </a>

        <div className='nav__menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#homeProfile' className='nav__link'>
                <AppstoreOutlined /> Home
              </a>
            </li>

            <li className='nav__item'>
              <a href='#aboutProfile' className='nav__link'>
                <UserOutlined /> About
              </a>
            </li>

            <li className='nav__item'>
              <a href='#SkillProfile' className='nav__link'>
                <FileOutlined /> Skill
              </a>
            </li>

            <li className='nav__item'>
              <a href='' className='nav__link'>
                <BranchesOutlined /> Services
              </a>
            </li>

            <li className='nav__item'>
              <a href='' className='nav__link'>
                <BranchesOutlined /> Protfolio
              </a>
            </li>

            <li className='nav__item'>
              <a href='' className='nav__link'>
                <BranchesOutlined /> Contact
              </a>
            </li>
          </ul>

          <CloseOutlined />
          <div className='nav__toggle'>
            <BranchesOutlined />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderProfile
