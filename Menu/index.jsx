export default function Menu({menuItems}) {
  return (
    <axg-element
      mode="dropdown"
      headTitlecolor="#FFF4A3"
      height="70"
      color="#282A35"
      colorHover="#fff"
      activeBackground="#282A35"
      headBackground="#0000"
      headBackgroundHover="#04AA6D"
      structure="dropdownGroup"
      title="Menu"
      background="#cbcbcb"
      subOpening="sub"
      subTrigger="click"
      dropdownid="headerMenuGroup"
    >
      {menuItems.map((item, key) => (
        <axg-element
          key={key}
          mode="dropdown"
          height="50"
          color={item.color}
          colorHover={item.activeColor}
          activeBackground={item.activeBg}
          headBackground="#0000"
          headBackgroundHover={item.activeBg}
          structure="link"
          title={item.name}
          link={item.uri}
          breakpoint="700"
          dropdownid={key}
        ></axg-element>
      ))}
    </axg-element>
  )
}