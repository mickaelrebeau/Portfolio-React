import './HomePage.scss'
import mike from '../../assets/mike.png'
import Competences from '../../components/Competences/Competences'
import Projets from '../../components/Projects/Projets'

export default function HomePage() {
    return (
    <>
        <div className='home'>
            <div className='cards'>
                <div className='home-text'>
                    <div className='title'> 
                        <img className='mike' src={mike} alt="" /> 
                        <h1>Mickael REBEAU</h1>
                    </div>
                    <h2>Développeur Python | Django | React | Nest JS | Symfony</h2>
                    <p>
                    Savoir coder ne suffit pas à être un développeur professionnelle.<br/>
                    C'est est une combinaison de compétences techniques, relationnelles et d'une passion mais également un apprentissage constant. Je continue de développer toutes ces compétences au fil de ma carrière, et j'ai hâte de continuer à les mettre en pratique dans de nouveaux projets passionnants.
                    </p>
                    <div className='buttons'>
                        <a className='button' href="https://github.com/mickaelrebeau" rel="noopener">Github</a>
                        <a className='button' href="https://www.linkedin.com/in/mickael-r%C3%A9beau/" rel="noopener">Linkedin</a>
                        <a className='button front' href="https://www.frontendmentor.io/profile/mickaelrebeau" rel="noopener">Frontend Mentor</a>
                        <a className='button' href="https://www.twitch.tv/mike_dreeman" rel="noopener">Twitch</a>
                        <a className='button' href="https://www.instagram.com/mike_photocollection/" rel="noopener">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
        <Projets/>
        <Competences/>
    </>
    )
}