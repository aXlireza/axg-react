import Image from "next/image";
import style from './style.module.css'
import Text from '../Text';
import Statics from '../Statics';
import Starts from '../Stars';
import Button from '../Button';

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