import './Hero.scss';
import heroGrid from '../../assets/images/hero_grid.png';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero__grid-container'>
                <img className="hero__grid-image" src={heroGrid} alt="A grid of pictures"></img>
                <h2 className="hero__h2">Online Experiences</h2>
                <p className="hero__p">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
} 