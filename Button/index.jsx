import { useEffect } from 'react'

export default function Button({
  iconclasses,
  plane,
  roundlevel,
  customclasses,
  onClick,
  iconSize,
  icon,
  height,
  text,
  link,
  bg,
  color,
  size,
  mode,
  dev,
  id,
  innerclasses,
  textfontsize,
  textclasses,
  activecolor,
  hovercolor,
} = {}) {
  
  useEffect(() => {
    if (document.getElementById(id) && onClick) test.addEventListener('click', onClick)
  }, [])

  return <axg-element
    mode={mode || 'button_v1'}
    dev={dev}
    id={id}
    plane={plane}
    iconsize={iconSize}
    iconclasses={iconclasses}
    icon={icon}
    height={height}
    text={text}
    link={link}
    bg={bg}
    color={color}
    size={size}
    customclasses={customclasses}
    roundlevel={roundlevel}
    innerclasses={innerclasses}
    textfontsize={textfontsize}
    textclasses={textclasses}
    activecolor={activecolor}
    hovercolor={hovercolor}
  ></axg-element>
}