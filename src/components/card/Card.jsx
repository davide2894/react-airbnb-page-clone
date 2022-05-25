import './Card.scss';
import starIcon from '../../assets/icons/star_icon.png';

export default function Card (props) {

    let isSoldout = props.cardData.openSpots === 0;
    let isOnline = props.cardData.location == "Online";
    let badgeText;
    
    if(isSoldout) {
        badgeText = "SOLD OUT";
    } else if (isOnline) {
        badgeText = "ONLINE";
    }

    return (
        <div className='card'>
            <div className='card__image-container'>
                {badgeText && <span className="card__badge">{badgeText}</span>}
                <img className='card__image' src={require(`../../assets/images/${props.cardData.coverImg}`)} alt='A smiling swim athlete' />
            </div>
            <div className='card__rating-container'>
                <img className='card__rating-star card__rating-child' src={starIcon} aria-hidden='true' />
                <span className='card__rating-child'>{props.cardData.rating}</span>
                <span className='card__gray-colored card__rating-child'>{props.cardData.reviewCount}</span>
                <span className='card__gray-colored card__dot card__rating-child'></span>
                <span className='card__gray-colored card__rating-child'>{props.cardData.location}</span>
            </div>
            <div className='card__description'>
                <span>{props.cardData.title}</span>
            </div>
            <div className='card__price-container'>
                <span className='card__price'>From ${props.cardData.price}</span>
                <span className='card__price-person'> / person</span>
            </div>
        </div>
    );
}