import React from 'react' 
import './footer.css'
import logo from '../products/logo2.png'
import inst from '../products/inst.png'
import telega from '../products/telega.png'
import whatsapp from '../products/whatsapp.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" className='img-logo'/>
                <p>Культура</p>
            </div>
            <div className='footer-socials'>
                <div className="footer-socials-conatainer">
                    <a href="https://www.instagram.com/neritsuko/" target="_blank" rel="noopener noreferrer">
                        <img src={inst} alt="" className='img-socials' style={{ cursor: 'pointer'}}/>
                    </a>
                </div>
                <div className="footer-socials-conatainer">
                    <a href="https://t.me/l0lcringe" target="_blank" rel="noopener noreferrer">
                        <img src={telega} alt=""className='img-socials' style={{ cursor: 'pointer'}}/>
                    </a>
                </div>
                <div className="footer-socials-conatainer">
                    <a href="https://wa.me/77075500121" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="" className='img-socials' style={{ cursor: 'pointer'}}/>
                    </a>
                </div>
            </div>
           <div className="footer-rights">
            <hr/>
            <p>Все права защищены, Культура 2023</p>
           </div>
        </div>
    )
}

export default Footer