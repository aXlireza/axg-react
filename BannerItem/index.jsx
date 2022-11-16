import Image from "next/image";
import style from './style.module.css'
import Statics from '../Statics';
import Starts from '../Stars';
import dynamic from "next/dynamic";

const Button = dynamic(() => import('../Button'), {ssr: false,})
const Text = dynamic(() => import('../Text'), {ssr: false,})

export default function BannerItem({ image, text, statics, starRate, link }) {
  return (
    <div className={style.item}>
      <Image layout="responsive" width="100" height="60" src={image} alt="" />
      <div className={style.context}>
        <Text tag="h3" text={text} nomargin={1}/>
        <Statics data={statics}/>
        <Starts rate={starRate} />
        <Button size="medium" text="Visit" mode="link" link={link} color="var(--light)" bg="var(--green)" />
      </div>
    </div>
  );
}