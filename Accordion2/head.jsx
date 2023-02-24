
export default function Accordion_head({
  dev,
  text,
  bg,
  color,
  customclasses,
  activecolor,
  activemode,
  innerclasses,
  textclasses,
  children,
}) {
  return <axg-element
    mode='accordion_head_v2'
    dev={dev}
    text={text}
    bg={bg}
    color={color}
    customclasses={customclasses}
    activecolor={activecolor}
    activemode={activemode}
    innerclasses={innerclasses}
    textclasses={textclasses}
  >{children}</axg-element>
}