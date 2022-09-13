import Link from 'next/link'
import Icon from '../Icon'
import style from './style.module.css'

export default function Button({ iconSize, icon, height="100%", text='Button', link='/', bg='var(--blue)', color="", size='normal', mode='button'} = {}) {
  const inner = (
    <div style={{height:height}} className={`${icon ? style.iconButton : ''} ${style.inner}`}>
      {icon ? <Icon size={iconSize} src={icon} plane={1} /> : ''}
      <span style={{height:height, backgroundColor:bg}} className={style.buttonBg}></span>
      <span style={{height:height, color:color}} className={style.buttonText}>{text}</span>
    </div>
  )

  const buttonBody = (
    <button style={size ? style[size] : {height:height}} className={`${style[size]} ${style.button}`}>{inner}</button>
  )

  const linkBody = (
    <Link style={size ? style[size] :{height:height}} href={link}>
      <a className={`${style[size]} ${style.button}`}>{inner}</a>
    </Link>
  )

  let result;

  switch (mode) {
    case 'button':
      result = buttonBody
      break;
    case 'link':
      result = linkBody
      break;
    default:
      result = buttonBody
      break;
  }

  return result;
}