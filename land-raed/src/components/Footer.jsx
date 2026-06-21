import { IoMdTime } from 'react-icons/io'

const Footer = () => {
  const openingHour = 9
  const closingHour = 5
  const now = new Date()
  const currentHour = now.getHours()
  const currentDay = now.getDay()
  const isWeekday = currentDay >= 1 && currentDay <= 5
  const isOpen = 
    isWeekday &&
    currentHour >= openingHour &&
    currentHour <= closingHour

  const openElement = (
    <>
      <div className='message'>
        <IoMdTime className='icon' />
        <span className='status open'>
          We are now open.
        </span>
      </div>
      <div className='footer-contact'>
        Call us on (0121) 123 4567
      </div>
    </>
  )
  
  const closedElement = (
    <>
      <div className='message'>
        <IoMdTime className='icon' />
        <span className='status closed'>
          We are now closed.
        </span>
      </div>
      <div className='footer-contact'>
        Opening hours: Monday to Friday, {openingHour}am to {closingHour}pm
      </div>
    </>
  )

  return (
    <footer className='footer'>
      {isOpen ? openElement : closedElement}      
    </footer>
  )
}

export default Footer
