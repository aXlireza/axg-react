
import Text from '../Text'

export default function SubHeader({top, mainTitle, description}) {
  return (
    <section className='container vertical righty' style={{rowGap: '0px', backgroundColor: 'var(--tertiaryColor)'}}>
      <Text text={top} nomargin={1} color={"var(--secondaryTextColor)"} size={"var(--standard-text-fontSize)"} />
      <Text text={mainTitle} nomargin={1} color={"var(--primaryTextColor)"} size={"var(--xLarge-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
      <Text text={description} nomargin={1} color={"var(--secondaryTextColor)"} size={"var(--smallLarge-text-fontSize)"} />
    </section>
  )
}