import dynamic from "next/dynamic"

const Image = dynamic(() => import("../../Image"), {ssr: false})
const Text = dynamic(() => import('../../Text'), {ssr: false})
const Button = dynamic(() => import('../../Button'), {ssr: false})
import Statics from "../../Statics"
import formStyle from './form.module.css'

import Head from "next/head"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Product({area, image, alt, name, price, currency, description, features}) {

  const onSubmit = data => {
    const datastr = {
      firstName: data.target.fname.value,
      lastName: data.target.lname.value,
      tel: data.target.tel.value,
      email: data.target.email.value,
      transporterType: data.target.transportationType.value,
      quantityControl: data.target.quantity.value,
      good: name,
      area: area.name
    }

    const config = {
      method: 'post',
      url: 'http://localhost:8271/ordersList',
      headers: {'Content-Type': 'application/json'},
      data: datastr
    }
    
    axios(config)
    .then(response => {
      if (response.data.status.toLowerCase() == "ok") {
        console.log("data submited")
        orderForm.style.display = "none"
        formValidPop.style.display = "block"
      }
      else console.log(response.data)
    })
    .catch(error => console.log(error));
  }

  const openPopup = (() => {
    activationHandler.start('formCover')
    formCover.classList.add(formStyle.open)
    axg_naturalizer.classList.add(formStyle.shadowOuterDom)
  })

  const closePopup = (() => {
    activationHandler.end('formCover')
    formCover.classList.remove(formStyle.open)
    axg_naturalizer.classList.remove(formStyle.shadowOuterDom)
  })


  useEffect(() => {
    window.addEventListener('load', () => {
      axg_naturalizer.addEventListener("click", closePopup)
      orderbtn.addEventListener('click', openPopup)
    })
  }, [])

  const [transportedType, setTransportedType] = useState('none')

  const handleTransportedTypeChange = (event) => {
    console.log('handleTransportedTypeChange');
    const newData = event.target.value
    setTransportedType(newData)
  }


  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <section
        // onClick={closePopup}
        id="mainContent"
        className={`rtl container splitToLeft horizontal ${formStyle.outerDom}`}
      >
        {image ? <section className="subcontainer">
          <div style={{display: 'block', width:'100%', height: '100%', position: 'relative'}}>
             <Image
              src={image}
              loading={'eager'}
              alt={alt}
              customclasses={'round_l1'}
            />
          </div>
        </section> : ''}
        <section className="subcontainer">
          <section className="subcontainer centerOnTablet" style={{rowGap: '0px'}}>
            <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
            {/* title */}
              <Text text={name} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l7-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
            </section>
            {/* price */}
            {price ? (
              <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
                <Text text={price} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} inlineStyle={{letterSpacing: '2px'}} />,
                <Text text={currency} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
              </section>
            ) : ''}
          </section>
          {/* description */}
          <Text text={description} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l3-text-fontSize)"} />
          {/* request button */}
          <section className="subcontainer centerOnTablet" style={{rowGap: '0px'}}>
            <Button
              text={'ثبت سفارش'}
              iconclasses={'font_l5 round_l1 rexfont_init address-book rx_light'}
              innerclasses={'padding_l3 round_l1'}
              customclasses={'rtl'}
              size={'medium'}
              bg={'var(--blue)'}
              color={'var(--light)'}
              plane={'1'}
              id={'orderbtn'}
              textclasses={'betterwordspacing'}
            />
            <Text textclasses={'nomargin centerOnTablet'} text={"*بزودی بعد ثبت درخواست و پر کردن فرم, با شما تماس گرفته خواهد شد"} color={"var(--secondaryTextColor)"} textfontsize={"var(--l1-text-fontSize)"} />
          </section>

          {/* separator */}
          <section className="subcontainer separator"></section>
          
          {/* Product features list */}
          {features ? (
            <section className="subcontainer">
              <section className="subcontainer">
                <Text textclasses={'nomargin'} text={"ویژگی های محصول"} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l4-text-fontSize)"} />
              </section>
              <section className="subcontainer">
                <Statics
                  inlineStyle={{width: 'fit-content'}}
                  mode='list'
                  data={features.map(feature => ([...feature, 1]))}
                />
              </section>
            </section>
          ) : ''}
        </section>
      </section>
      <section id="formCover" className={formStyle.formCover}>
        <section id="formValidPop" className={formStyle.formValidPop}>سفارش شما ثبت شد, همکاران ما بزودی ما بزودی با شما تماس خواهند گرفت.</section>
        <form onSubmit={onSubmit} id="orderForm" className={'subcontainer vertical righty'}>
          <Text textclasses={'nomargin'} text={'لطفا اطلاعات خود را برای تماس وارد کنید'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l4-text-fontSize)"} />
          <section className={'subcontainer vertical'}>
            <Text textclasses={'nomargin'} text={'اطلاعات حقیقی/حقوقی'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
            <section className={'subcontainer vertical'}>
              <section className={'subcontainer horizontal'}>
                <label className={'subcontainer vertical righty'}>
                  نام / نام شرکت
                  <input type={'text'} name={'fname'} placeholder={'نام / نام شرکت'} />
                </label>
                <label className={'subcontainer vertical righty'}>
                  نام خانوادگی
                  <input type={'text'} name={'lname'} placeholder={'نام خانوادگی'} />
                </label>
              </section>
              <section className={'subcontainer horizontal'}>
                <label className={'subcontainer vertical righty'}>
                  شماره تماس
                  <input type={'text'} name={'tel'} placeholder={'شماره تماس'} required/>
                </label>
                <label className={'subcontainer vertical righty'}>
                  ایمیل
                  <input type={'text'} name={'email'} placeholder={'ایمیل'} />
                </label>
              </section>
            </section>
          </section>
          <section className={'subcontainer vertical'}>
            <Text textclasses={'nomargin'} text={'اطلاعات باربری'} textcolor={"var(--primaryTextColor)"} textfontsize={"var(--l2-text-fontSize)"} />
            <section className={'subcontainer horizontal righty'}>
              <label className={'subcontainer vertical righty'}>
                نوع ماشین
                <select name={'transportationType'} onChange={handleTransportedTypeChange}>
                  <option value={'none'}>هیچ کدام</option>
                  <option value={'5to10'}>کامیونت 5 تا 10تن</option>
                  <option value={'10to20'}>کامیون 10 تا 20تن</option>
                  <option value={'20to30'}>تریلی 20 تا 30تن</option>
                </select>
              </label>
              <label className={'subcontainer vertical righty'}>
                مقدار تناژ
                <select name={'quantity'}>
                  <option value="none">هیچ کدام</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={5}>5 تن - 100 پاکت</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={6}>6 تن - 120 پاکت</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={7}>7 تن - 140 پاکت</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={8}>8 تن - 160 پاکت</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={9}>9 تن - 180 پاکت</option>
                  <option style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</option>

                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={11}>11 تن - 220 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={12}>12 تن - 240 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={13}>13 تن - 260 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={14}>14 تن - 280 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={15}>15 تن - 300 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={16}>16 تن - 320 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={17}>17 تن - 340 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={18}>18 تن - 360 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={19}>19 تن - 380 پاکت</option>
                  <option style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</option>

                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={21}>21 تن - 420 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={22}>22 تن - 440 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={23}>23 تن - 460 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={24}>24 تن - 480 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={25}>25 تن - 500 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={26}>26 تن - 520 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={27}>27 تن - 540 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={28}>28 تن - 560 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={29}>29 تن - 580 پاکت</option>
                  <option style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={30}>30 تن - 600 پاکت</option>
                </select>
              </label>
            </section>
          </section>
          <input type={'submit'} value={'ارسال درخواست'} />
        </form>
      </section>
    </>
  )
}
