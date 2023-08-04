import './Back.scss'
import polleen from '../../assets/polleen.png'
import catdog from '../../assets/cats-dogs.png'

export default function Back() {
    return (
        <>
            <div className='Back-competences'>
                <div className='back-card'>
                    <h2 className='lp-lol'>LP-LOL</h2>
                    <div className='text'>
                        <h2>LP-LOL</h2>
                        <p>
                            Application de partage de données personnelles. Le logo arrive soon..
                        </p>
                        <p>
                            Réalisé sous NestJS | React | MongoDB
                        </p>
                        <a className='back-button' href='#' rel="noopener">Dépot Github (soon...)</a>
                    </div>
                </div>
                <div className='back-card'>
                    <img src={catdog} alt="" />
                    <div className='text'>
                        <h2>Dogs or Cats</h2>
                        <p>
                            Model d'intelligence Artificelle.
                            <br/>
                            Le model est entrainé à detecter un chien ou un chat sur une image.
                        </p>
                        <p>
                            Réalisé sous Python
                        </p>
                        <a className='back-button' href='https://github.com/mickaelrebeau/Colab-Repo/blob/main/Dogs_or_Cats_Final.ipynb' rel="noopener">Dépot Github</a>
                    </div>
                </div>
                <div className='back-card'>
                    <img src={polleen} alt="" />
                    <div className='text'>
                        <h2>Polleen</h2>
                        <p>
                            CRM Web App accompagné d'un système de recommandation de prospects. 
                        </p>
                        <p>
                            Réalisé sous Django | TailwindCSS | PostgreSQL
                        </p>
                        <a className='back-button' href='https://github.com/mickaelrebeau/Polleen' rel="noopener">Dépot Github</a>
                    </div>
                </div>
            </div>
        </>
    )
}