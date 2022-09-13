import Text from "../../components/Text"
import style from "./style.module.scss"
const axios = require('axios')

export default function Feedback() {

  const sendEmail = (e) => {
    e.preventDefault()

    const mailOptions = {
      text: 'anonymous@rexfont.com',
    }

    axios.post(`${process.env.RexfontAPI}/saveFeedback`, mailOptions)
  }

  return (
    <section className='subcontainer splitToTop lefty'>
      <Text tag={"h2"} customClass={['sectionIntro', 'small']} nomargin={1} align="left" text={"Write us your feedback"} />
      <form onSubmit={sendEmail} className={style.form}>
        <textarea className={style.textare} style={{width: '100%'}} rows={8}></textarea>
        <input className={style.submit} type="submit" value="Submit" />
      </form>
    </section>
  )
}