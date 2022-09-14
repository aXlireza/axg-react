
import Text from '../Text'

export default function SubHeader({top, mainTitle, description}) {
  return (
    <section className='container'>
      <Text text={top} nomargin={1} color={"#565969"} size={"var(--standard-text-fontSize)"} />
      <Text text={mainTitle} nomargin={1} color={"#001659"} size={"var(--xLarge-text-fontSize)"} />
      <Text text={description} nomargin={1} color={"#565969"} size={"var(--smallLarge-text-fontSize)"} />
    </section>
  )
}