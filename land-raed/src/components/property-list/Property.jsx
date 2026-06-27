import PropertyImage from './PropertyImage'

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
        Property Details
      </PropertyImage>
      <div>Property Attributes</div>
    </div>
  )
}

export default Property
