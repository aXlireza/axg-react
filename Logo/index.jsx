import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

export default function Logo({src, width=60, height=40}) {
  return (
    <Link
      style={{display: 'block'}}
      href="/"
      className={style.headerLogo}
    >
      <Image
        width={width}
        height={height}
        src={src}
        alt="logo"
      />
    </Link>
  )
}