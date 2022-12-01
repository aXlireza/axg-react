import style from './style.module.css'

import Logo from '../Logo'
import Searchbar from '../Searchbar'
import Menu from '../Menu'

export default function Header({searchbar, dir, menuGroup, searchbardisplay=true, menuItems = [], SearchbarPlaceholder = "Search..."}) {
  return (
    <>
      <header className={style.header} style={{transform: 'translateY(-1px)'}}>
        <Logo src="/images/logo.png" />
        {searchbardisplay ? <Searchbar
          preactive={searchbar.preactive}
          checked={searchbar.checked}
          id={searchbar.id}
          name={searchbar.name}
          inputcustomclasses={searchbar.inputcustomclasses}
          customclasses={searchbar.customclasses}
          bg={searchbar.bg}
          color={searchbar.color}
          placeholder={searchbar.placeholder}
          queryid={searchbar.queryid}
          collapseonmobile={searchbar.collapseonmobile}
          dir={searchbar.dir}
          labelclasses={searchbar.labelclasses}
          inputcovercustomclasses={searchbar.inputcovercustomclasses}
          reslistcustomclasses={searchbar.reslistcustomclasses}
          customstyles={searchbar.customstyles}
        />: ''}
        <Menu dir={dir} menuGroup={menuGroup} menuItems={menuItems} />
      </header>
      <section className="ax_elements" nomain="true">
        {menuItems.map((item, key) => (
          <axg-element
            key={key}
            mode={'dropdown_body_v4'}
            dev={"staging"}
            exit={item.exit}
            headTitle={item.headTitle}
            headTitlecolor={item.headTitlecolor}
            height={item.height}
            color={item.color}
            colorHover={item.colorHover}
            activeBackground={item.activeBackground}
            headBackground={item.headBackground}
            headBackgroundHover={item.headBackgroundHover}
            structure={item.structure}
            fontsize={item.fontsize}
            title={item.title}
            background={item.background}
            targetLocator={item.targetLocator}
            subOpening={item.subOpening}
            options={JSON.stringify(item.options)}
            optionsApi={item.optionsApi}
            dropdownid={key}
            dir={dir}
          ></axg-element>
        ))}
      </section>
    </>
  )
}