import { guid } from '../../utils/guid';
import { Card } from '../Card';
import './player-hand.css';

const PlayerHand = ({ gameStatus, highlightedCards, justPlanted, selectedCards, setHighlightedCards, setSelectedCards, tradeStatus }) => {
  const cards = Array(3).fill().map(card => (
    <Card
      beanType="chili"
      gameStatus={gameStatus}
      highlightedCards={highlightedCards}
      justPlanted={justPlanted}
      key={guid()}
      selectable={true}
      selectedCards={selectedCards}
      setHighlightedCards={setHighlightedCards}
      setSelectedCards={setSelectedCards}
      tradeStatus={tradeStatus}
    />
  ));

  return (
      <div className="player-hand">
        {cards}
      </div>
  );
};

export default PlayerHand;
