import './Card.scss';
import starIcon from '../../assets/icons/star_icon.png';

export default function Card (props) {
    return (
        <div className='card'>
            <div className='card__image-container'>
                <span className='card__badge'>
                    SOLD OUT
                </span>
                <img className='card__image' src={props.img} alt='A smiling swim athlete' />
            </div>
            <div className='card__rating-container'>
                <img className='card__rating-star card__rating-child' src={starIcon} aria-hidden='true' />
                <span className='card__rating-child'>{props.rating}</span>
                <span className='card__gray-colored card__rating-child'>{props.reviewCount}</span>
                <span className='card__gray-colored card__dot card__rating-child'></span>
                <span className='card__gray-colored card__rating-child'>{props.country}</span>
            </div>
            <div className='card__description'>
                <span>{props.title}</span>
            </div>
            <div className='card__price-container'>
                <span className='card__price'>From ${props.price}</span>
                <span className='card__price-person'> / person</span>
            </div>
        </div>
    );
}