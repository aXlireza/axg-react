import Icon from "../../components/Icon";
import style from './style.module.css'
import BannerItem from "../../components/BannerItem";

export default function Icons({ filterPrefix, filterPlacement='filterPlacement', icons, margin, columnGap=0, id, limit }) {
  return (
    <div className={`subcontainer vertical`}>
      <div className={`subcontainer horizontal ${style.megas}`} style={{columnGap: '10px'}}>
        {icons.map((icon, key) => icon.banner
          ? <BannerItem
          key={key}
          image={icon.image}
          boxshadow={icon.boxshadow}
          text={icon.name}
          statics={icon.statics}
          starRate={icon.starRate}
          link={icon.url}
        /> : '')}
      </div>

      <div
        id={id}
        className={`
          subcontainer
          ${margin ? style.margin : ''}
          ${limit ? style.limit : ''}
        `} style={{columnGap: columnGap ? 10 : 0}}
      >
        {icons.map(({isfont, img, tags, unicode, size, boxshadow, name, url, color, plane, banner}, key) => banner
          ? '' : <Icon
          key={key}
          filterPlacement={filterPlacement}
          tags={tags}
          filterPrefix={filterPrefix}
          limit={limit ? 1 : 0}
          src={unicode || img}
          isfont={isfont}
          size={size}
          boxshadow={boxshadow}
          name={name}
          url={url}
          color={color}
          margin={1}
          plane={plane}
        />)}
      </div>
    </div>
  );
}