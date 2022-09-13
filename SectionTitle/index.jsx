import Text from '../Text';

export default function SectionTitle({ align, size, title }) {
  return (
    <Text customClass={['wide', 'sectionIntro', size, align]} tag='h2' text={title} />
  )
}
