import Link from 'next/link'
import Image from 'next/image'
const Text = dynamic(() => import('../Text'), {ssr: false,})
import style from './style.module.css'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'



export default function Icon({
  midactive=1,
  filterPrefix,
  filterPlacement='filterPlacement',
  tags=[],
  boxshadow=1,
  limit,
  plane=0,
  isfont=1,
  src,
  size='normal',
  name,
  url,
  color='#000',
  margin
} = {}) {

  const iconBody = (extraClasses) => (
    <div className={extraClasses}>
      {/* {iconData.unicode.map((uni, i) => (
        <i
          key={i}
          style={{color: color}}
          className={`rexfont_init g${i} ${extraClasses} ${src} ${margin ? style.margin : ''} ${style[size]}`}
        />
      ))} */}
    </div>
  )

  const [iconData, seticonData] = useState({unicode:['']});
  
  useEffect(async () => {
    if (isfont) {
      let iconname = src
      let iconstyle = 'regular'
      if (src.indexOf(' ') > 0) {
        iconname = src.split(' ')[0]
        iconstyle = src.split(' ')[1].slice(3).replaceAll('_', '-')
      }

      const iconReq = await fetch(`${process.env.RexfontAPI}/getIcon/${iconname}/${iconstyle}`).then(res => res.json())
      console.log(iconname, iconstyle, iconReq[0]);
      seticonData(iconReq[0])
    }
  } ,[])

  tags = tags.map(tag => `${filterPrefix}${tag}`)
  if (plane) {
    const classes = `rexfont_init ${style.i} ${isfont ? src : ''} ${style[size]} ${margin ? style.margin : ''}`
    return url
    ? (
      <Link href={url}>
        <a className={`${midactive ? style.midactive : ''} ${tags.join(' ')}`} style={{color: color}}>
          {
            isfont == 0
            ? <Image layout="fixed" width="20" height="20" src={src} alt="" />
            : iconBody(style.i)
          }
        </a>
      </Link>
    ) : (
      isfont == 0
      ? <Image layout="fixed" width="20" height="20" src={src} alt="" />
      : <i style={{color: color}} className={`${midactive ? style.midactive : ''} ${tags.join(' ')} ${classes}`} />
    )
  }

  const content = (<>
    <div className={`${style.background} `}></div>
    {
      isfont == 0
      ? <Image layout="fixed" width="20" height="20" src={src} alt="" />
      :(<div>
        {iconBody(style.iconPlaceholder)}
        {iconBody(style.i)}
        {/* (
          {iconData.unicode.map((uni, i) => (<i style={{color: color}} className={`rexfont_init g${i} ${style.iconPlaceholder} ${src}`} />))}
          {iconData.unicode.map((uni, i) => (<i style={{color: color}} className={`rexfont_init g${i} ${style.i} ${src}`} />)}
        ) */}
      </div>)
    }
    {name ? <Text tag='p' text={name} className={style.text} customclasses={'boxTitle'}/> : ''}
  </>)

  const classes = `${margin ? style.margin : ''} ${limit ? style.limit : ''} ${boxshadow ? style.boxshadow : ''} ${style.iconBody} ${style[size]} ${name ? style.split : style.center}`

  const body = url
  ? <Link href={url}><a className={`${midactive ? style.midactive : ''} ${filterPlacement} ${tags.join(' ')} ${classes}`}>{content}</a></Link>
  : <div {...tags.join(' ')} className={`${midactive ? style.midactive : ''} ${filterPlacement} ${tags.join(' ')} ${classes}`}>{content}</div>

  return body
}

