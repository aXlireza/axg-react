export default function Menu({dir, menuGroup, menuItems}) {
  // TODO: The dropdown is not working
  return (
    <>
      <axg-element
        mode={'dropdown_v4'}
        structure={'dropdownGroup'}
        headTitlecolor={menuGroup.headTitlecolor}
        height={menuGroup.height}
        color={menuGroup.color}
        colorHover={menuGroup.colorHover}
        activeBackground={menuGroup.activeBackground}
        headBackground={menuGroup.headBackground}
        headBackgroundHover={menuGroup.headBackgroundHover}
        title={menuGroup.title}
        background={menuGroup.background}
        subOpening={menuGroup.subOpening}
        subTrigger={menuGroup.subTrigger}
        dropdownid={menuGroup.dropdownid}
        dir={dir}
        liststyle={'column-gap: 2vw'}
      >
        {menuItems.map((item, key) => (
          <axg-element
            key={key}
            mode={'dropdown_v4'}
            height={item.height || menuGroup.height}
            color={item.color || menuGroup.color}
            colorHover={item.activeColor || menuGroup.colorHover}
            activeBackground={item.activeBg || menuGroup.activeBackground}
            headBackground={item.headBackground || menuGroup.headBackground}
            headBackgroundHover={item.activeBg || menuGroup.headBackgroundHover}
            structure={item.structure}
            title={item.name}
            link={item.link}
            breakpoint={item.breakpoint}
            dropdownid={key}
            targetLocator={item.targetLocator}
            exit={item.exit}
            headtitle={item.headtitle}
            headtitlecolor={item.headtitlecolor}
            subtrigger={item.subtrigger}
            subopening={item.subopening}
            background={item.background}
            dir={dir}
          ></axg-element>
        ))}
      </axg-element>
    </>
  )
}