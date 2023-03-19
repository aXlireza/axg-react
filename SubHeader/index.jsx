import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../Text'), {ssr: false,})
export default function SubHeader({top, mainTitle, description}) {
  return (
    <section className='container vertical rtl' style={{rowGap: '0px', backgroundColor: 'var(--tertiaryColor)'}}>
      <Text customclasses={'centerOnTablet'} text={top} textclasses={'nomargin'} textcolor={"var(--secondaryColor)"} textfontsize={"var(--standard-text-fontSize)"} />
      <Text customclasses={'centerOnTablet'} text={mainTitle} textclasses={'nomargin'} textcolor={"var(--primaryColor)"} textfontsize={"var(--xLarge-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
      <Text customclasses={'centerOnTablet'} text={description} textclasses={'nomargin'} textcolor={"var(--secondaryColor)"} textfontsize={"var(--smallLarge-text-fontSize)"} />
    </section>
  )
}