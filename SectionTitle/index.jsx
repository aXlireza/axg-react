import Text from "../../builtin-axg/text/v2";

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
