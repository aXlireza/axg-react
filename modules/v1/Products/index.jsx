import Carousel from '../../../Carousel'
import PostTemplate from '../PostTemplate'
import SectionHead from '../SectionHead'

export default function Articles({posts}) {

  const postsList = posts.map((post, key) => <PostTemplate
    key={key}
    postbg={'#fff'}
    image={post.thumbnail}
    customclasses={'carousel_item articlessize'}
    innerclasses={'carousel_inneritem articlesinnersize productsListBorder'}
    title={post.title}
    link={`/shop/${post.acf.order_area.slug}/${post.slug}`}
    date={'محصولات ساینا را بررسی کنید'}
  />)

  return (
    <>
      <section className="container vertical padding_l0">

        <section className="subcontainer horizontal righty padding_l3">
          <SectionHead
            title={'محصولات ساینا'}
            btnTitle={'همه محصولات'}
            btnLink={'/shop'}
            textcustomclasses={'textstrokewhite'}
            textcolor={'#fff'}
            subtextcolor={'var(--primaryColor)'}
          />
        </section>

        <section className={'container wide'}>
          <Carousel
            fademode={'fade'}
            name={'articles'}
            carouselmode={'relative'}
            customstyle={"height: 100px;"}
            slidescovergap={0}
            contentclasses={'topy'}
            leftnav={'0'}
          >{postsList}</Carousel>
        </section>

      </section>
    </>
  )
}