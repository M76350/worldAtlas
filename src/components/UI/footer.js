import footerContact from '../../api/footerContact.json'
import {NavLink} from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer-section'>
            <div className='container grid grid-three-cols'>
                {
                    footerContact.map((curdata, index) => {
                        const { icon, title, details } = curdata
                        return (
                            <div className='footer-contact' key={index}>
                                <div className='icon'>{icon}</div>
                                <div className='footer-contact-text'>

                                    <p>{title}</p>
                                    <p>{details}</p>


                                </div>


                            </div>
                        )
                    })
                }

            </div>
            <div className='copyright-area'>
                <div className='container'>
                    <div className='grid grid-two-cols'>
                        <div className='copyright-text'>
                            <p>copuright %copy;2025,all right reserved</p>
                            <li>
                                <NavLink to='google.com' target='_blank'> source code</NavLink>

                            </li>
                        </div>
                        <div className='footer-menu'>
                            <ul>
                                <li>
                                <NavLink to='/' >home</NavLink>

                                </li>
                                <li>
                                <NavLink to='/About' >aboutme</NavLink>

                                </li>
                                <li>
                                <NavLink to='google.com' target='_blank'>socal</NavLink>

                                </li>
                                <li>
                                <NavLink to='/contact' >contact</NavLink>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </footer>

    )
}

export default Footer;