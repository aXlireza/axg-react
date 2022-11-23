import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../Text'), {ssr: false,})
export default function SubHeader({top, mainTitle, description}) {
  return (
    <section className='container vertical righty' style={{rowGap: '0px', backgroundColor: 'var(--tertiaryColor)'}}>
      <Text text={top} textclasses={'nomargin'} textcolor={"var(--secondaryTextColor)"} textfontsize={"var(--standard-text-fontSize)"} />
      <Text text={mainTitle} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--xLarge-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
      <Text text={description} textclasses={'nomargin'} textcolor={"var(--secondaryTextColor)"} textfontsize={"var(--smallLarge-text-fontSize)"} />
    </section>
  )
}