import './Card.scss';
import swimAthlete from '../../assets/images/swim_athlete.png';
import starIcon from '../../assets/icons/star_icon.png';

export default function Card () {
    return (
        <div className='card'>
            <div className='card__image-container'>
                <span className='card__badge'>
                    SOLD OUT
                </span>
                <img className='card__image' src={swimAthlete} alt='A smiling swim athlete' />
            </div>
            <div className='card__rating-container'>
                <img className='card__rating-star' src={starIcon} aria-hidden='true' />
                <span>5.0 (6)</span>
            </div>
            <div className='card__description'>
                <span>Life lessons with Katie Zaferes</span>
            </div>
            <div className='card__price-container'>
                <span className='card__price'>From $136</span>
                <span className='card__price-person'>/ person</span>
            </div>
        </div>
    );
}