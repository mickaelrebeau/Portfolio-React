import './Competences.scss';
import react from '../../assets/logos_react.png';
import bootstrap from '../../assets/logos_bootstrap.png';
import tailwind from '../../assets/logos_tailwindcss.png';
import django from '../../assets/logos_django.png';
import nest from '../../assets/logos_nestjs.png';
import symfony from '../../assets/logos_symfony.png';
import python from '../../assets/logos_python.png';
import postgre from '../../assets/logos_postgresql.png';
import mongo from '../../assets/logos_mongodb.png';

export default function Competences() {
    return (
        <>
            <div className='competences'>
                <div className='competences-card'>
                    <div className='card-c'>
                        <h2>Front-End</h2>
                        <div className='c-text'>
                            <div>
                                <img src={react} alt="" />
                                <p>React</p>
                            </div>
                            <div>
                                <img src={bootstrap} alt="" />
                                <p>Bootstrap</p>
                            </div>
                            <div>
                                <img src={tailwind} alt="" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-c'>
                        <h2>Back-End</h2>
                        <div className='c-text'>
                            <div>
                                <img src={django} alt="" />
                                <p>Django</p>
                            </div>
                            <div>
                                <img src={nest} alt="" />
                                <p>Nest JS</p>
                            </div>
                            <div>
                                <img src={symfony} alt="" />
                                <p>Symfony</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-c'>
                        <h2>Autres</h2>
                        <div className='c-text'>
                            <div>
                                <img src={python} alt="" />
                                <p>Python</p>
                            </div>
                            <div>
                                <img src={postgre} alt="" />
                                <p>PostgreSQL</p>
                            </div>
                            <div>
                                <img src={mongo} alt="" />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}