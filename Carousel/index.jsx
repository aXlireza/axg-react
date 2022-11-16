export default function Carousel({
	contentclasses,
	children,
	fademode,
	name,
	carouselmode,
	customstyle,
	rightnav,
	leftnav,
	slidescovergap,
}) {
	return <axg-element
		mode='carousel_v2'
		dev=''
		fademode={fademode}
		name={name}
		carouselmode={carouselmode}
		customstyle={customstyle}
		rightnav={rightnav}
		leftnav={leftnav}
		contentclasses={contentclasses}
		slidescovergap={slidescovergap}
	>{children}</axg-element>
}