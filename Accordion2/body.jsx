
export default function Accordion_body({
    dev,
    active,
    customclasses,
    innercustomclasses,
    activemode,
    children,
  }) {
    return <axg-element
      mode='accordion_body_v2'
      dev={dev}
      active={active}
      customclasses={customclasses}
      innercustomclasses={innercustomclasses}
      activemode={activemode}
    >{children}</axg-element>
  }