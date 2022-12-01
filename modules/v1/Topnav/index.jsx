import dynamic from 'next/dynamic'

const Button = dynamic(() => import('../../../Button'), {ssr: false,})

export default function Topnav() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={`font_l3 round_l1 rexfont_init ${icon}`}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'highlightOnlyIconOnHover round_l1'}
    textclasses={'font_l1'}
    bg={'#0000'}
    color={'var(--primaryColor)'}
    height='49px'
    plane={'1'}
    link={link}
  />
  return (
    <section className={'container horizontal horizontalTabletBreak padding_l0 widePadding_l3'} style={{borderBottom: '1px solid #0001'}}>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <section className={'subcontainer'}>{custombtn('info@sainax.com', 'mailto:info@sainax.com', 'address-book rx_light', 'hidetextontablet')}</section>
        <section className={'subcontainer'}>{custombtn('021-86044653', 'tel:02186044653', 'address-book rx_light')}</section>
      </section>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <section className={'subcontainer'}>{custombtn('', 'https://twitter.com/SainaGostar', 'address-book rx_light', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', 'https://www.linkedin.com/company/saina-gostar/', 'address-book rx_light', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', 'https://www.instagram.com/saina.gostar/', 'address-book rx_light', 'nocolgap')}</section>
      </section>
    </section>
  )
}