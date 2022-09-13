import Text from "../../components/Text"
import Button from "../../components/Button"

export default function SectionContext({headline, paragraph, button}) {
  return (
    <div className='subcontainer packed'>
      <Text nomargin={1} text={headline} tag='h2' />
      <Text nomargin={1} tag='p' customClass={['paragraph']} text={paragraph} />
      {button ? <Button iconSize="small" icon={button.icon} size="large" text={button.text} mode="link" link={button.link} color={button.color} bg={button.bg} /> : ''}
    </div>
  )
}