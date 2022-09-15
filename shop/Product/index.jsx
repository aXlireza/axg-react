import Image from "next/image"
import Text from "../../Text"
import Button from "../../Button"
import Statics from "../../Statics"
import Stars from "../../Stars"

export default function Product({image, alt, name, price, currency, description, features}) {
  return (
    <section className="container splitToLeft horizontal">
      <section className="subcontainer">
        <div style={{display: 'block', width:'100%', height: '100%', position: 'relative'}}>
          <Image
            alt={alt}
            layout='responsive'
            width={'100'}
            height={'100'}
            src={image}
          />
        </div>
      </section>
      <section className="subcontainer">
        <section className="subcontainer vertical horizontalTabletBreak righty" style={{rowGap: '0px'}}>
          <section className="subcontainer lefty" style={{columnGap: '7px', width: 'fit-content'}}>
          {/* title */}
            <Text text={name} nomargin={1} color={"var(--primaryTextColor)"} size={"var(--l7-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
          </section>
          {/* price */}
          <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
            <Text text={price} nomargin={1} color={"var(--primaryTextColor)"} size={"var(--l2-text-fontSize)"} inlineStyle={{letterSpacing: '2px'}} />
            <Text text={currency} nomargin={1} color={"var(--primaryTextColor)"} size={"var(--l2-text-fontSize)"} />
          </section>
        </section>
        {/* description */}
        <Text text={description} color={"var(--primaryTextColor)"} size={"var(--l3-text-fontSize)"} />
        {/* request button */}
        <section className="subcontainer vertical righty centerOnTablet" style={{rowGap: '0px'}}>
          <Button size="medium" text="ثبت درخواست" mode="link" link="/integrate" color="var(--light)" bg="var(--blue)" />
          <Text nomargin={1} text={"*بزودی بعد ثبت درخواست و پر کردن فرم, با شما تماس گرفته خواهد شد"} color={"var(--secondaryTextColor)"} size={"var(--l1-text-fontSize)"} />
        </section>

        {/* separator */}
        <section className="subcontainer separator"></section>
        
        {/* Product features list */}
        <section className="subcontainer">
          <section className="subcontainer">
            <Text nomargin={1} text={"ویژگی های محصول"} color={"var(--primaryTextColor)"} size={"var(--l4-text-fontSize)"} />
          </section>
          <section className="subcontainer">
            <Statics
              inlineStyle={{width: 'fit-content'}}
              mode='list'
              data={features.map(feature => ([...feature, 1]))}
            />
          </section>
        </section>
      </section>
    </section>
  )
}