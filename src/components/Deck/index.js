import { useState } from 'react';
import { Card } from '../Card';
import { beans } from '../../beans';
import DeckImage from '../../images/Deck.jpg';
import './deck.css';

const Deck = ({ gameStatus, highlightedCards, justPlanted, selectedCards, setGameStatus, setHighlightedCards, setSelectedCards, tradeStatus }) => {
  const [leftBean, setLeftBean] = useState('');
  const [rightBean, setRightBean] = useState('');

  //Initialize deck
  const deck = [];

  for (const bean in beans) {
    for (let index = 0; index <= beans[bean].cardCount; index++) {
      deck.push(bean);
    }
  }

  //shuffle deck
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  //=====================Handle when the deck is clicked=====================
  const deckClicked = () => {
    if (gameStatus === 'plantSecondOrFlip2') {
      let tempDeck = deck;
      let tempLeftBean = '';
      let tempRightBean = '';

      if (tempDeck.length >= 0) {
        tempLeftBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
        tempRightBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
      } else if (tempDeck.length === 1) {
        tempLeftBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
        tempRightBean = '';
      }

      setLeftBean(tempLeftBean);
      setRightBean(tempRightBean);
      setGameStatus('flipped2Cards');
      setHighlightedCards([
        ...highlightedCards,
        tempLeftBean,
        tempRightBean,
      ]);
    }
  }
  //=====================Display the deck and the two flipped cards=====================

  return (
    <div className='Deck' onClick={deckClicked}>
      <img
        alt='DeckImage'
        id='DeckImage'
        src={DeckImage}
        style={{ boxShadow: `0 0 0 ${gameStatus === 'plantSecondOrFlip2' ? '0.3vw': '0'} #fde32c` }}
      />
      <Card
        beanType={leftBean}
        highlighted={true}
        highlightedCards={highlightedCards}
        id='leftBean'
        justPlanted={justPlanted}
        selectable={true}
        selectedCards={selectedCards}
        setHighlightedCards={setHighlightedCards}
        setSelectedCards={setSelectedCards}
        tradeStatus={tradeStatus}
        x='15.5vw'
        y='1vw'
      />
      <Card
        beanType={rightBean}
        highlighted={true}
        highlightedCards={highlightedCards}
        id='rightBean'
        justPlanted={justPlanted}
        selectable={true}
        selectedCards={selectedCards}
        setHighlightedCards={setHighlightedCards}
        setSelectedCards={setSelectedCards}
        tradeStatus={tradeStatus}
        x='25vw'
        y='1vw'
      />
    </div>
  );
}

export default Deck;
