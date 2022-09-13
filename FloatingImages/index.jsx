import Image from "next/image";
import style from './style.module.css'

export default function FloatingImages({images}) {
  return (
    <div className='subcontainer' style={{display: 'block'}}>
      {images.map((image, key) => (
        <div key={key} style={{display:'block'}, image.mode == 'main' ? {zIndex:10} : {zIndex:2}} className={`${style.cover} ${style[image.mode]}`}>
          <Image layout="responsive" width={image.width} height={image.height} key={key} src={image.src} />
        </div>
      ))}
    </div>
  );
}