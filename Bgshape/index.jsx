import style from './style.module.css'
export default function Bgshape({shape}) {
  return shape ? (
      <div
        className={`
          ${style.item}
          ${(shape.positions.map(position => style[position])).join(' ')}
        `}
        style={{backgroundColor: shape.color}}
      ></div>
    ) : <div className={style.cover}></div>
}