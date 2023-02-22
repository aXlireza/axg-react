
export default function Accordion({
  dev,
  active,
  customclasses,
  activemode,
  groupname, //the name equal to the other accordions of the same which have to be synced in order to open/close accordingly 
  children,
}) {
  return <axg-element
    mode='accordion_v2'
    dev={dev}
    active={active}
    customclasses={customclasses}
    activemode={activemode}
    groupname={groupname}
  >{children}</axg-element>
}