import Text from '../Text';

export default function SectionTitle({ customclasses, title, textclasses }) {
  return (
    <Text
      customclasses={`wide sectionIntro ${customclasses}`}
      tag='h2'
      text={title}
      textclasses={textclasses}
    />
  )
}
