
export default function Image({ src, sizes=[], loading='lazy', id='', alt='', customclasses='' }) {
  return (
    <axg-element
      dev={'staging'}
      mode={'image_v1'}
      src={src}
      sizes={sizes}
      loading={loading}
      id={id}
      alt={alt}
      customclasses={customclasses}
    ></axg-element>
  )
}