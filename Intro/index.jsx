import Text from "../../components/Text";

export default function Intro({mainText, subText}) {
  return (
    <div className='subcontainer vertical center'>
      <Text tag="h1" text={mainText} customclasses={'mainText'}/> 
      <Text tag="h3" text={subText} customclasses={'subMainText'}/> 
    </div>
  )
}