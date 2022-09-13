import Logo from '../../components/Logo'
import Searchbar from '../Searchbar'
// import Menu from '../../components/Menu'
import Menu from '../../axg-react/Menu'

import style from './style.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <Logo src="/images/logo.png" />
      <Searchbar placeholder="Search for your Icon" hideAtTop={false}/>
      <Menu menuItems={[
        {name: 'Icons', uri: '/icons'},
        // {name: 'Softwares', uri: '/softwares'},
        {name: 'Integrate', uri: '/integrate'},
        {name: 'Docs', uri: '/docs'},
        {name: 'Blog', uri: '/blog'},
        {name: 'Contact us', uri: '/contact-us'},
      ]}/>
    </header>
  )
}