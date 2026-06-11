import { MdOutlineEmail, MdOutlineHomeWork, MdOutlinePhone } from 'react-icons/md'

const Header = () => {
  return (
    <header className='header'>
      <div className='item brand'>
        <MdOutlineHomeWork className='icon' />
        <span className='logo-font'>
          Land-rǣd
        </span>
      </div>
      <div className='item contact'>
        <MdOutlinePhone className='icon' />
        <span>(0121) 123 4567</span>
      </div>
      <div className='item contact'>
        <MdOutlineEmail className='icon' />
        <span>enquires@landraed.com</span>
      </div>
    </header>
  )
}

export default Header
