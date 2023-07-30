import './Footer.scss'
import github from '../../assets/github.png'
import front from '../../assets/frontendmentor.png'
import insta from '../../assets/instagram.png'
import twitch from '../../assets/twitch.png'
import linkedin from '../../assets/linkedin.png'

export default function Footer() {
    return (
        <footer className="footer">
            <section className='contents'>
                <div className='contact'>
                    <h2>Contact</h2>
                </div>
                <div className='contact-text'>    
                    <p>Téléphone: 0102030405</p>
                    <p>Email: mike@test.fr</p>
                </div>
                <div className='social'>
                    <a href="https://github.com/mickaelrebeau" rel="noopener">
                        <img className='social-img' src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/mickael-r%C3%A9beau/" rel="noopener">
                        <img className='social-img' src={linkedin} alt="" />
                    </a>
                    <a href="https://www.frontendmentor.io/profile/mickaelrebeau" rel="noopener">
                        <img className='social-img' src={front} alt="" />
                    </a>
                    <a href="https://www.twitch.tv/mike_dreeman" rel="noopener">
                        <img className='social-img' src={twitch} alt="" />
                    </a>
                    <a href="https://www.instagram.com/mike_photocollection/" rel="noopener">
                        <img className='social-img' src={insta} alt="" />
                    </a>
                </div>
                <div className='mentions'>
                    <span>© Mike_dreeman, 2023. All rights reserved.</span>
                </div>
            </section>
        </footer>
    )
}