import './GameCard.css';
import placeholder from './assets/placeholder.svg'

interface GameCardProps{
    title: string;
    description: string;
    imageURL?: string;
    redirectURL: string;
}

export default function GameCard({title, description, imageURL, redirectURL}: GameCardProps) {
    return (
        <div className="game-card">
            {imageURL ? <img src={imageURL} alt={title} className="game-image" /> : <img src={placeholder} alt={title} className="game-image" />}
            <h2 className="game-title">{title}</h2>
            <p className="game-description">{description}</p>
            <a href={redirectURL} className="play-button">Play Now</a>
        </div>
    );
}