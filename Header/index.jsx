import style from './style.module.css'

import Logo from '../Logo'
import Searchbar from '../Searchbar'
import Menu from '../Menu'

export default function Header({searchbar=true, menuItems = [], SearchbarPlaceholder = "Search..."}) {
  return (
    <header className={style.header}>
      <Logo src="/images/logo.png" />
      {searchbar ? <Searchbar placeholder={SearchbarPlaceholder} hideAtTop={false}/> : ''}
      <Menu menuItems={menuItems} />
    </header>
  )
}