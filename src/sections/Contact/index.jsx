import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return(
    <div className='text-left flex items-end gap-4 text-lg'>
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium} />
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
    </div>
    )
}

export default Contact;