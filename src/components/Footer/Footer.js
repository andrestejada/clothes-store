import React from 'react'
import './Footer.scss'
import {ReactComponent as IconFacebook} from '../../assets/icon-facebook.svg'
import {ReactComponent as IconIntagram} from '../../assets/icon-instagram.svg'
import {ReactComponent as IconTwitter} from '../../assets/icon-twitter.svg'
import {ReactComponent as IconYoutube} from '../../assets/icon-youtube.svg'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container' >
                <section>
                    <h3>POLÍTICAS <span>+</span> </h3>
                    <a href='#'>Políticas de privacidad</a>
                    <a href='#'>Políticas de cambio</a>
                    <a href='#'>Políticas de envío</a>
                    <a href='#'>Términos y condiciones</a>
                    <a href='#'>Responsabilidad social</a>
                </section>
                <section>
                    <h3>SOBRE NOSOTROS <span>+</span> </h3>
                    <a href='#'>Encuentra tu tienda</a> 
                    <a href='#'>Contáctanos</a>
                    <a href='#'>Trabaja con nosotros</a>
                </section>
                <section>
                    <h3>SÍGUENOS EN:<span>+</span></h3>
                    <div>
                        <IconFacebook/>
                        <IconTwitter/>
                        <IconIntagram/>
                        <IconYoutube/>
                    </div>
                   
                </section>
            </div>
            <p>© Copyright Colombia. Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer
