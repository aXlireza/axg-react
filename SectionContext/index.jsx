import dynamic from "next/dynamic"
const Text = dynamic(() => import('../Text'), {ssr: false,})
const Button = dynamic(() => import('../Button'), {ssr: false,})

export default function SectionContext({headline, paragraph, button}) {
  return (
    <div className='subcontainer packed'>
      <Text nomargin={1} text={headline} tag='h2' />
      <Text nomargin={1} tag='p' customclasses={'paragraph'} text={paragraph} />
      {button ? <Button iconSize="small" icon={button.icon} size="large" text={button.text} mode="link" link={button.link} color={button.color} bg={button.bg} /> : ''}
    </div>
  )
}