
export default function DropdownHead({
    dev,
    height,
    color,
    colorHover,
    activeBackground,
    headBackground,
    headBackgroundHover,
    structure,
    title,
    link,
    breakpoint,
    dropdownid,
    targetLocator,
    exit,
    headtitle,
    headtitlecolor,
    subtrigger,
    subopening,
    background,
    dir,
}) {
    return <axg-element
    dev={dev}
    mode={'dropdown_v4'}
    height={height}
    color={color}
    colorHover={colorHover}
    activeBackground={activeBackground}
    headBackground={headBackground}
    headBackgroundHover={headBackgroundHover}
    structure={structure}
    title={title}
    link={link}
    breakpoint={breakpoint}
    dropdownid={dropdownid}
    targetLocator={targetLocator}
    exit={exit}
    headtitle={headtitle}
    headtitlecolor={headtitlecolor}
    subtrigger={subtrigger}
    subopening={subopening}
    background={background}
    dir={dir}
  ></axg-element>
}