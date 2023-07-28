import logo from '../images/movies-browser-low-resolution-logo-white-on-transparent-background.png';
import {Link} from 'react-router-dom';

const Footer = () =>{
    
    return(
        <>
            <header className="bg-dark p-3">
                <div className='mx-auto' style={{width: "20rem"}}>
                    <img src={logo} alt="..." style={{width : "20rem"}} />
                    <div className='d-flex justify-content-between fs-5'>
                        <Link to="/" className='text-white text-decoration-none'>Home</Link>
                        <Link to="/about" className='text-white text-decoration-none'>About</Link>
                        <Link to="/contact" className='text-white text-decoration-none'>Contact</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Footer;