import PropertyImage from './PropertyImage'
import PropertyTypeLabel from './PropertyTypeLabel'
import PropertyBanner from './PropertyBanner'
import IconWithText from './IconWithText'
import { PiBathtubLight, PiBedLight } from 'react-icons/pi'
import { TbMaximize } from 'react-icons/tb'
import PropertyAttribute from './PropertyAttribute'

const Property = ({
  image,
  bedrooms,
  bathrooms,
  address,
  rent,
  surface,
  available,
  date,
  type
}) => {
  return (
    <div
      className='property-card'
      style={{
        opacity: !available ? '0.5' : '1'
      }}
    >
      <PropertyImage image={image}>
        <PropertyTypeLabel type={type} />
        {!available && 
          <PropertyBanner />
        }
        <div className='property-info'>
          <IconWithText
            Icon={PiBedLight}
            text={bedrooms}
          />
          <span>|</span>
          <IconWithText
            Icon={PiBathtubLight}
            text={bathrooms}
          />
          <span>|</span>
          <IconWithText
            Icon={TbMaximize}
            text={`${surface} m²`}
          />
        </div>
      </PropertyImage>
      <PropertyAttribute text={address} />
      <PropertyAttribute text={`£${rent} / month`} />
      <PropertyAttribute text={`Available from ${date}`} />
    </div>
  )
}

export default Property
