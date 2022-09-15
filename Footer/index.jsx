import Link from 'next/link'
import style from './style.module.css'
import Icons from '../Icons'
import Text from '../../components/Text'

export default function Footer({children, links, socialMedia}) {
  return (
    <footer className={`container vertical ${style.footer}`}>
      <section className='subcontainer horizontal spread'>
        {links.map((col, i) => (
          <ul key={i}>
            {col.map((item, j) => (
              <li key={j}><Link href={item.link}><a className={style.a}>{item.text}</a></Link></li>
            ))}
          </ul>
        ))}
      </section>

      <section className='subcontainer horizontal spread'>
        <Icons id="footerSocialMedia" margin={1} columnGap={1}
          icons={socialMedia.map(({icon: unicode, link: url, img}) => ({
            isfont:img ? 0 : 1, img, unicode, size:'tiny', color:'var(--tertiaryTextColor)', plane:1, boxshadow:0, url}))}
        />
        <Text color="var(--light)" tag="p" nomargin={1} customClass={['paragraph', 'center']}>
          {children}
        </Text>
      </section>
    </footer>
  )
}