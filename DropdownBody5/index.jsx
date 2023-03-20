
export default function Menu({
  dev,
  exit,
  headTitle,
  headTitlecolor,
  height,
  color,
  colorHover,
  activeBackground,
  headBackground,
  headBackgroundHover,
  structure,
  fontsize,
  title,
  background,
  targetLocator,
  subOpening,
  options,
  optionsApi,
  dropdownid,
  listclasses,
}) {
  return (
    <axg-element
      mode={'dropdown_body_v5'}
      dev={dev}
      exit={exit}
      listclasses={listclasses}
      headTitle={headTitle}
      headTitlecolor={headTitlecolor}
      height={height}
      color={color}
      colorHover={colorHover}
      activeBackground={activeBackground}
      headBackground={headBackground}
      headBackgroundHover={headBackgroundHover}
      structure={structure}
      fontsize={fontsize}
      title={title}
      background={background}
      targetLocator={targetLocator}
      subOpening={subOpening}
      options={JSON.stringify(options)}
      optionsApi={optionsApi}
      dropdownid={dropdownid}
    ></axg-element>
  )
}