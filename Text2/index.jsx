
export default function Text({
  alt,
  orderdirection,
  innercustomclasses,
  textalign,
  subtextalign,
  textfontsize,
  link,
  textcolor,
  textclasses,
  subtext,
  subtextclasses,
  subtextcolor,
  subtextfontsize,
  icon,
  dev,
  children,
  tag='h2',
  text='',
  customclasses,
  inlinestyle,
  nomargin=0,
}) {
  return <axg-element
    mode={'text_v2'}
    dev={dev}
    alt={alt}
    customclasses={customclasses}
    nomargin={nomargin}
    link={link}
    text={text}
    textfontsize={textfontsize}
    textcolor={textcolor}
    textclasses={textclasses}
    textalign={textalign}
    subtext={subtext}
    subtextclasses={subtextclasses}
    subtextcolor={subtextcolor}
    subtextfontsize={subtextfontsize}
    subtextalign={subtextalign}
    icon={icon}
    innercustomclasses={innercustomclasses}
    inlinestyle={inlinestyle}
    tag={tag}
    orderdirection={orderdirection}
  >{children}</axg-element>
}