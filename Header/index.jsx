import style from './style.module.css'

import Logo from '../Logo'
import Searchbar from '../Searchbar'
import Menu from '../Menu'
import Topnav from '../../modules/Topnav'

export default function Header({searchbar, dir, menuGroup, searchbardisplay=true, menuItems = [], SearchbarPlaceholder = "Search..."}) {
  return (
    <>
      <header className={`${style.header} subcontainer vertical widePadding_l0 norowgap`} style={{transform: 'translateY(-1px)'}}>
        <section className={'subcontainer horizontal'}><Topnav /></section>
        <section className={'horizontal horizontalTabletBreak subcontainer widePadding_l9'}>
          <Logo src="/images/logo.png" />
          {searchbardisplay ? <Searchbar
            formclasses={'centerOnMobile'}
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
            outformclasses={searchbar.outformclasses}
          />: ''}
          <Menu dir={dir} menuGroup={menuGroup} menuItems={menuItems} />
        </section>
      </header>
      <section className="ax_elements" nomain="true">
        {menuItems.map((item, key) => (
          <axg-element
            key={key}
            mode={'dropdown_body_v4'}
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