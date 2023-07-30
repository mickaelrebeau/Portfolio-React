import './Projects.scss';

export default function Projets() {
    return (
    <>
    <div className='Projects-page'>
        <h1>Front-End</h1>
        <div className='projets'>
            <div className='projet central'>
                <div className='projet-text'>
                    <a className='projet-title' href="https://mickaelrebeau.github.io/Central-Music-ALT-Formation/" rel="noopener">Central Music</a>
                    <p>Stack: HTML/CSS Bootstrap</p>
                    <a className='projet-depot' href="https://github.com/mickaelrebeau/Central-Music-ALT-Formation" rel="noopener">Dépot github</a>
                </div>
            </div>
            <div className='projet start'>
                <div className='projet-text'>
                    <a className='projet-title' href="https://mickaelrebeau.github.io/Start-ALT/" rel="noopener">Start</a>
                    <p>Stack: React/CSS Bootstrap</p>
                    <a className='projet-depot' href="https://github.com/mickaelrebeau/Start-ALT" rel="noopener">Dépot github</a>
                </div>
            </div>
            <div className='projet w-blog'>
                <div className='projet-text'>
                    <a className='projet-title' href="https://mickaelrebeau.github.io/News-Homepage-Frontend-Mentor/" rel="noopener">W. Blog</a>
                    <p>Stack: HTML/CSS</p>
                    <a className='projet-depot' href="https://github.com/mickaelrebeau/News-Homepage-Frontend-Mentor" rel="noopener">Dépot github</a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}