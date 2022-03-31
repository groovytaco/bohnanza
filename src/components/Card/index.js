import { useEffect, useState } from 'react';
import { beans } from '../../beans';
import './card.css';

export const Card = ({ beanType, highlighted, highlightedCards, justPlanted, selectable, selectedCards, setHighlightedCards, setSelectedCards, tradeStatus, x: left, y: top }) => {
  const [hidden, setHidden] = useState(beanType === '');
  const [opacity, setOpacity] = useState(1);
  const [selected, setSelected] = useState(false);
  
  const boxShadow = highlighted ? '0 0 0 0.3vw #fde32c' : '0 0 0 0px #fde32c';

  //=====================Handle 'selected' variable changing=====================
  useEffect(() => {
    setHidden(beanType === '');
  }, [beanType])

  //=====================Handle 'justPlanted' gamestate variable changing=====================
  //if card was selected hide it and remove it from the selectedCards array in gamestate
  if (justPlanted) {
    if (selected) {
      //remove this card from the highlightedCards array
      for (let card in selectedCards) {
        if (selectedCards.at(card) === beanType) selectedCards.splice(card, 1);
      }

      if (highlighted) {
        //remove this card from the highlightedCards array
        for (let card in highlightedCards) {
          if (highlightedCards.at(card) === beanType) highlightedCards.splice(card, 1);
        }
      }

      setSelectedCards(selectedCards);
      setHighlightedCards(highlightedCards);
      setHidden(true);
      setSelected(false);
      setOpacity(1);
    }
  }
  //=====================Handle 'tradeStatus' gamestate variable changing=====================
  if (tradeStatus === 'confirmTrade') {
    if (selected) {
      //remove this card from the highlightedCards array
      for (let card in selectedCards) {
        if (selectedCards.at(card) === beanType) selectedCards.splice(card, 1);
      }

      if (highlighted) {
        //remove this card from the highlightedCards array
        for (let card in highlightedCards) {
          if (highlightedCards.at(card) === beanType) highlightedCards.splice(card, 1);
        }
      }

      setSelectedCards(selectedCards);
      setHighlightedCards(highlightedCards);
      setHidden(true);
      setSelected(false);
      setOpacity(1);
    }
  } else if (tradeStatus === 'cancelTrade') {
    if (selected) {
      for (let card in selectedCards) {
        if (selectedCards.at(card) === beanType) selectedCards.splice(card, 1);
      }

      setSelectedCards(selectedCards);
      setSelected(false);
      setOpacity(1);
    }
  }
  

  //=====================Handle this card being clicked=====================
  const cardClicked = () => {
    if (selectable && tradeStatus === 'notTrading') {
      //unselect card if it was selected
      if (selected) {
        for (let card in selectedCards) {
          if (selectedCards.at(card) === beanType) selectedCards.splice(card, 1);
        }

        setSelectedCards(selectedCards);
        setSelected(false);
        setOpacity(1);
        //select card if it was not selected
      } else {
        setSelectedCards([...selectedCards, beanType]);
        setSelected(true);
        setOpacity(0.1);
      }
    } else if (selectable && tradeStatus !== 'notTrading') {
      alert('Must finish trade first!');
    }
  };

  //=====================Display this card=====================
  return (
    <div
      className='Card'
      style={{ left, opacity, top }}
    >
      <img
        alt={beanType}
        className='bean-image'
        hidden={hidden}
        onClick={cardClicked}
        src={beans[beanType]?.image || ''}
        style={{ boxShadow }}
      />
    </div>
  );
}
