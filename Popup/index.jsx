import style from './style.module.css'

export default function Popup() {
  return (
    <section id="popup" className={style.container}>
      <p className="popTitle"></p>
      <button className="popCancel"></button>
      <button className="popVerify"></button>
    </section>
  )
}
