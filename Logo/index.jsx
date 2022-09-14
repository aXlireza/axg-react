import Image from 'next/future/image'
import Link from 'next/link'
import style from './style.module.css'

export default function Logo({src}) {
  return (
    <Link style={{display: 'block'}} href="/">
      <a style={{display: 'block'}} className={style.headerLogo}>
        <Image layout='responsive' width={60} height={40} src={src} alt="logo" />
      </a>
    </Link>
  )
}