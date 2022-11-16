export default function Text({ innercustomclasses, textalign, subtextalign, svg, textfontsize, link, textcolor, textclasses, subtext, subtextclasses, subtextcolor, subtextfontsize, iconclass, svgtextfontsize, dev, size, align, children, tag='h1', color='var(--dark)', text='', customclasses, inlinestyle, nomargin=0 }) {
  return <axg-element
    mode={'text_v1'}
    dev={dev}
    customclasses={customclasses}
    nomargin={nomargin}
    link={link}
    text={text}
    textfontsize={textfontsize}
    textcolor={textcolor}
    textclasses={textclasses}
    subtext={subtext}
    subtextclasses={subtextclasses}
    subtextcolor={subtextcolor}
    subtextfontsize={subtextfontsize}
    iconclass={iconclass}
    svg={svg}
    textalign={textalign}
    subtextalign={subtextalign}
    innercustomclasses={innercustomclasses}
    inlinestyle={inlinestyle}
  />
}