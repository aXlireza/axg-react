import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

export default function Logo({minWidth='', dev='', alt='Logo', link='/', src, width=60, height=40}) {
  return (
    // <Link
    //   style={{display: 'block'}}
    //   href="/"
    //   className={style.headerLogo}
    // >
    //   <Image
    //     width={width}
    //     height={height}
    //     src={src}
    //     alt="logo"
    //   />
    // </Link>
    <axg-element
      mode={'logo_v3'}
      minWidth={minWidth}
      dev={dev}
      link={link}
      src={src}
      alt={alt}
      width={width}
      height={height}
      
    ></axg-element>
  )
}