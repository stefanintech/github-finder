import {FaGithub} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
    <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
            <FaGithub className='inline pr-2 text-3xl' />
            <Link to='/' className='text-lg font-bold align-middle'>
            {title}
            </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                <a href="https://twitter.com/codewithfan" target='_blank' rel='noreferrer'><FaTwitter className='inline pr-2 text-2xl mt-1 ml-3'></FaTwitter></a>
                <a href="https://www.linkedin.com/in/stefantaitano/" target='_blank' rel='noreferrer'><FaLinkedin className='inline pr-2 text-2xl mt-1 ml-3'></FaLinkedin></a>
            </div>
        </div>
    </div>
</nav>
}

Navbar.defaultProps = {
    title: 'GitHub Discovery'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
