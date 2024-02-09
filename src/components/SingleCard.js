import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disable}) {

    const handleClick = () => {
        if(!disable){
            handleChoice(card);
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped": ""}>
                <img className="front" alt="card_front" src={card.src} />
                <img 
                    className="back" 
                    src="./cards_356/img/cover.png" 
                    onClick={handleClick} 
                    alt="card_back" />
            </div>
        </div>
    )
}