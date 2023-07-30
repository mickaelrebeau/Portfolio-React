import Carousel from 'react-bootstrap/Carousel';
import canard from '../../assets/canard_asterix.jpg'
import chateau from '../../assets/chateau.jpg'
import blanche from '../../assets/fleur_blanche.jpg'
import jaune from '../../assets/fleur_jaune.jpg'
import fleur from '../../assets/fleur_solo.jpg'
import golden from '../../assets/haru_golgen_hour.jpg'
import jardin from '../../assets/haru_jardin.jpg'
import salon from '../../assets/haru_salon.jpg'
import horloge from '../../assets/horloge_douzy.jpg'
import moon from '../../assets/moon.jpg'
import olga from '../../assets/olga_b&w.jpg'
import olga2 from '../../assets/olga_jardin.jpg'
import belgique from '../../assets/oui_belgique.jpg'
import asterix2 from '../../assets/asterix_2.jpg'
import parc from '../../assets/parc_leo.jpg'
import pomme from '../../assets/pomme.jpg'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pomme}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chateau}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={olga2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={canard}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jaune}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jardin}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={parc}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blanche}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={moon}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asterix2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={golden}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fleur}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={horloge}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={olga}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={salon}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={belgique}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;