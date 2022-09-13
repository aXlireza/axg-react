import style from './style.module.css'

export default function Statics({ globalClass=[], customClass=[], mode='flex', data }) {
  return (
    <ul className={`${globalClass.join(' ')} ${customClass.map(cclass => style[cclass])} ${style[mode]} subcontainer center`}>
      {data.map((item, key) => (
        <li key={key}>
          <span className={item[2] ? style.name : style.number}>{item[0]}</span>
          <span className={item[2] ? style.number : style.name}>{item[1]}</span>
        </li>
      ))}
    </ul>
  )
}