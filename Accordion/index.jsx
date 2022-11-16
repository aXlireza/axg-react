export default function Accordion({
  dev,
  text,
  content,
  active,
  btnbg,
  btncolor,
  customclasses,
  btncustomclasses,
  contentcustomclasses,
  contentinnercustomclasses,
  btnactivecolor,
  activemode,
  btninnerclasses,
  btntextclasses,
}) {
  return <axg-element
    mode='accordion_v1'
    dev={dev}
    text={text}
    content={content}
    active={active}
    btnbg={btnbg}
    btncolor={btncolor}
    customclasses={customclasses}
    btncustomclasses={btncustomclasses}
    contentcustomclasses={contentcustomclasses}
    contentinnercustomclasses={contentinnercustomclasses}
    btnactivecolor={btnactivecolor}
    activemode={activemode}
    btninnerclasses={btninnerclasses}
    btntextclasses={btntextclasses}
  ></axg-element>
}