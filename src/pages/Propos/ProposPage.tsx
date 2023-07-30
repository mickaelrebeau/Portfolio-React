import './Propos.scss'
import games from '../../assets/games.png'
import { useState } from 'react'
import DarkVariantExample from '../../components/Carousel/Carousel'

export default function ProposPage() {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    return (
    <>
    <div className='ProposPage'>
        <div className='Games'>
            <p>
                Je joue beaucoup aux jeux-vidéos. On peut me retrouver aussi bien sur PC que sur mobile en passant pas les consoles.
                L'amour du jeux vidéos est plus important que la platforme de jeux. 
            </p>
            <img src={games} />
        </div>
        <div className='Anime'>
            <p>
                Comme je regarde également pas mal d'animés je vous mets une liste non-exhaustive de ce que j'ai pu regarder.
            </p>
            <ul className={`expandible ${isExpanded ? 'expanded' : ''}`}>
                <li>Ajin</li>
                <li>Akame Ga Kill</li>
                <li>Aldnoah Zéro</li>
                <li>Ani hi</li>
                <li>Assassination Classroom</li>
                {isExpanded
                    ? null
                    : (
                        <>
                        <li>B the beginning</li>
                        <li>Baka to test</li>
                        <li>Basilik</li>
                        <li>Black Lagoon</li>
                        <li>Bleach</li>
                        <li>Btoom</li>
                        <li>Bungou Stray Dogs</li>
                        <li>Chuunibyou</li>
                        <li>Citrus</li>
                        <li>Claymore</li>
                        <li>code Geass</li>
                        <li>Corpse Party</li>
                        <li>Cross Ange</li>
                        <li>Dame X Prince</li>
                        <li>Danganronpa</li>
                        <li>Danmachi</li>
                        <li>Dashi Kashi</li>
                        <li>Date a live</li>
                        <li>Death Parade</li>
                        <li>Devil may cry</li>
                        <li>Dimension W</li>
                        <li>Dragon Ball</li>
                        <li>Dr Stone</li>
                        <li>Evil or live</li>
                        <li>Fire Force</li>
                        <li>Food War</li>
                        <li>Gamers</li>
                        <li>God Eater</li>
                        <li>Gungrave</li>
                        <li>Hajimete no gal</li>
                        <li>Heroic age</li>
                        <li>Hitori no shita</li>
                        <li>Hunter x hunter</li>
                        <li>Inuyashiki</li>
                        <li>Jikan no</li>
                        <li>Just Because</li>
                        <li>Juuni Taisen</li>
                        <li>Kateikyoushi Hitman Reborn</li>
                        <li>Katsugeki Touken Ranbu</li>
                        <li>Kekkai Sensen</li>
                        <li>Killing Bites</li>
                        <li>Kiseijuu</li>
                        <li>Koutetsujou no Kabaneri</li>
                        <li>Kujira no Kora</li>
                        <li>Kyoukai no Kanata</li>
                        <li>Mirai Nikki</li>
                        <li>Nanatsu no Taizai</li>
                        <li>Nanbaka</li>
                        <li>Naruto</li>
                        <li>No game no life</li>
                        <li>Noragami</li>
                        <li>Nyan koi</li>
                        <li>One puch man</li>
                        <li>Owari no Seraph</li>
                        <li>Project K</li>
                        <li>Re Creator</li>
                        <li>Requiem for the phantom</li>
                        <li>Rock lee</li>
                        <li>Sakura Trick</li>
                        <li>Seikon no qwaser</li>
                        <li>Sekai no yami zukan</li>
                        <li>Sekirei</li>
                        <li>Sengoku Basara</li>
                        <li>Sengoku otome</li>
                        <li>Shokoku no altair</li>
                        <li>Sidonia no kishi</li>
                        <li>Soul Eater</li>
                        <li>Spice and Wolf</li>
                        <li>Sword Gai</li>
                        <li>Takunomi</li>
                        <li>Teekyu</li>
                        <li>The Boondocks</li>
                        <li>To aru kagaku</li>
                        <li>Tokyo ESP</li>
                        <li>Tokyo Ghoul</li>
                        <li>Tokyo Revengers</li>
                        <li>Tonari no kaigutu kun</li>
                        <li>Urara Meirochou</li>
                        <li>Valkyrie Drive</li>
                        <li>Violet Evergarden</li>
                        <li>Yuru Camp</li>
                        <li>Yuushibu</li>
                        <li>Zetsuen no tempest</li>
                        </>
                    )
                } 
                {isExpanded ? (
                    <span className="showmore" onClick={handleToggle}>
                        <p className="expand">En voir plus...</p>
                    </span>
                ) : (
                    <span className="showmore" onClick={handleToggle}>
                        <p className="expand">Afficher moins...</p>
                    </span>
                )}  
            </ul>
        </div>
        <div className='Photo'>
            <p>
                J'aime énormément la photographie. N'hésitez pas à faire un tour sur mon <a href='https://www.instagram.com/mike_photocollection/' rel="noopener">Instagram</a> pour en voir plus 😉. <br/>
            </p>
            <div className='carouselle'>
                <DarkVariantExample/>
            </div>
        </div>
    </div>
    </>
    )
}