import Image from "next/image"
import dynamic from "next/dynamic"

const Text = dynamic(() => import('../../Text'), {ssr: false})
const AxgButton = dynamic(() => import('../../Button'), {ssr: false})
import Statics from "../../Statics"
import formStyle from './form.module.css'

import { useForm} from 'react-hook-form'
import Button from '@mui/material/Button'

const Box = dynamic(() => import('@mui/material/Box'), {ssr: false})
import FilledInput from '@mui/material/FilledInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import SendIcon from '@mui/icons-material/Send'
import Grid from '@mui/material/Grid'
import Head from "next/head"
import axios from "axios"
import { useState, useEffect } from "react"

import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function Product({image, alt, name, price, currency, description, features}) {

  const onSubmit = data => {
    const datastr = JSON.stringify(data)
    
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
  const { handleSubmit, register } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      transporterType: '',
      quantityControl: '',
    }
  })

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

  const theme = createTheme({direction: 'rtl'})
  const cacheRtl = createCache({key: 'muirtl', stylisPlugins: [prefixer, rtlPlugin]})

  const [transportedType, setTransportedType] = useState('none')
  const [quantityState, setQuantityState] = useState(true)

  const handleTransportedTypeChange = (event) => {
    console.log(handleTransportedTypeChange);
    const newData = event.target.value
    setTransportedType(newData)

    // handle disabling or not the quantity field
    if (newData != 'none') setQuantityState(false)
    else setQuantityState(true)
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
              <Text text={name} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textsize={"var(--l7-text-fontSize)"} inlineStyle={{marginTop: `-1.8%`, marginBottom: '1%'}} />
            </section>
            {/* price */}
            {price ? (
              <section className="subcontainer" style={{columnGap: '7px', width: 'fit-content'}}>
                <Text text={price} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textsize={"var(--l2-text-fontSize)"} inlineStyle={{letterSpacing: '2px'}} />,
                <Text text={currency} textclasses={'nomargin'} textcolor={"var(--primaryTextColor)"} textsize={"var(--l2-text-fontSize)"} />
              </section>
            ) : ''}
          </section>
          {/* description */}
          <Text text={description} textcolor={"var(--primaryTextColor)"} textsize={"var(--l3-text-fontSize)"} />
          {/* request button */}
          <section className="subcontainer vertical righty centerOnTablet" style={{rowGap: '0px'}}>
            <AxgButton id="orderbtn" size="medium" text="ثبت درخواست" color="var(--light)" bg="var(--blue)" />
            <Text textclasses={'nomargin'} text={"*بزودی بعد ثبت درخواست و پر کردن فرم, با شما تماس گرفته خواهد شد"} color={"var(--secondaryTextColor)"} textfontsize={"var(--l1-text-fontSize)"} />
          </section>

          {/* separator */}
          <section className="subcontainer separator"></section>
          
          {/* Product features list */}
          {features ? (
            <section className="subcontainer">
              <section className="subcontainer">
                <Text textclasses={'nomargin'} text={"ویژگی های محصول"} textcolor={"var(--primaryTextColor)"} textsize={"var(--l4-text-fontSize)"} />
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
        <Box
          component="form"
          noValidate
          autoComplete="off"
          id="orderForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Text textclasses={'nomargin'} text={"لطفا اطلاعات خود را برای تماس وارد کنید"} textcolor={"var(--primaryTextColor)"} textsize={"var(--l4-text-fontSize)"} />
            </Grid>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                  <Text textclasses={'nomargin'} text="اطلاعات حقیقی/حقوقی" textsize={'var(--l1-text-fontSize)'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: '1%', width: '100%' }} variant="filled" size="small" required={true}>
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="firstName">نام / نام شرکت</InputLabel>
                    <FilledInput
                      id="firstName"
                      {...register("firstName")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: '1%', width: '100%' }} variant="filled" size="small" required={true}>
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="lastName">نام خانوادگی</InputLabel>
                    <FilledInput
                      id="lastName"
                      {...register("lastName")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: '1%', width: '100%' }} variant="filled" size="small" required={true}>
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="tel">شماره تماس</InputLabel>
                    <FilledInput
                      id="tel"
                      {...register("tel")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: '1%', width: '100%' }} variant="filled" size="small">
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="email">ایمیل</InputLabel>
                    <FilledInput
                      style={{direction: 'ltr'}}
                      id="email"
                      {...register("email")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Text textclasses={'nomargin'} text="اطلاعات باربری" textsize={'var(--l1-text-fontSize)'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl id="transporterTypeControl" sx={{ m: '1%', width: '100%' }} variant="filled" size="small">
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="email">نوع ماشین</InputLabel>
                    <Select
                      labelId="transporterTypeLabel"
                      id="transporterType"
                      {...register("transporterType")}
                      onChange={handleTransportedTypeChange}
                    >
                      <MenuItem value="none">
                        <em>هیچ کدام</em>
                      </MenuItem>
                      <MenuItem value={'5to10'}>کامیونت 5 تا 10تن</MenuItem>
                      <MenuItem value={'10to20'}>کامیون 10 تا 20تن</MenuItem>
                      <MenuItem value={'20to30'}>تریلی 20 تا 30تن</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl disabled={quantityState} id="quantityControl" sx={{ m: '1%', width: '100%' }} variant="filled" size="small">
                    <InputLabel sx={{fontSize: '90%'}} htmlFor="email">مقدار تناژ</InputLabel>
                    <Select
                      labelId="quantityLabel"
                      id="quantity"
                      {...register("quantityControl")}
                    >
                      <MenuItem value="none">
                        <em>هیچ کدام</em>
                      </MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={5}>5 تن - 100 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={6}>6 تن - 120 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={7}>7 تن - 140 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={8}>8 تن - 160 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={9}>9 تن - 180 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '5to10' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</MenuItem>

                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={10}>10 تن - 200 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={11}>11 تن - 220 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={12}>12 تن - 240 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={13}>13 تن - 260 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={14}>14 تن - 280 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={15}>15 تن - 300 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={16}>16 تن - 320 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={17}>17 تن - 340 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={18}>18 تن - 360 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={19}>19 تن - 380 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '10to20' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</MenuItem>

                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={20}>20 تن - 400 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={21}>21 تن - 420 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={22}>22 تن - 440 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={23}>23 تن - 460 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={24}>24 تن - 480 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={25}>25 تن - 500 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={26}>26 تن - 520 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={27}>27 تن - 540 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={28}>28 تن - 560 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={29}>29 تن - 580 پاکت</MenuItem>
                      <MenuItem style={{display: transportedType == '20to30' ? 'block' : 'none'}} value={30}>30 تن - 600 پاکت</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </ThemeProvider>
            </CacheProvider>
            <Grid item xs={12}>
              <Button  sx={{ m: '1%', width: '100%' }} style={{direction: 'ltr'}} variant="contained" type="submit" endIcon={<SendIcon /> }>
                ثبت درخواست
              </Button>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  )
}
