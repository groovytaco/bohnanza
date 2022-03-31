import { useEffect, useState } from 'react';
import BeanField from '../components/BeanField';
import Deck from '../components/Deck';
import InfoCard from '../components/InfoCard';
import Instructions from '../components/Instructions';
import PlayerHand from '../components/PlayerHand';
import TradeTable from '../components/TradeTable';
import './ActiveGame.css';

const ActiveGame = () => {
  const [gameStatus, setGameStatus] = useState('plantSecondOrFlip2');
  const [highlightedCards, setHighlightedCards] = useState([]);
  const [justPlanted, setJustPlanted] = useState(false);
  const [myCoinCount, setMyCoinCount] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [tradeStatus, setTradeStatus] = useState('notTrading');
  //=====================Initialize shuffle function=====================
  // const shuffle = (deckArray) => {
  //   // for 1000 turns
  //   // switch the values of two random cards
  //   for (let i = 0; i < 1000; i++) {
  //     let location1 = Math.floor(Math.random() * deckArray.length);
  //     let location2 = Math.floor(Math.random() * deckArray.length);
  //     let tmp = deckArray[location1];

  //     deckArray[location1] = deckArray[location2];
  //     deckArray[location2] = tmp;
  //   }

  //   setDeck(deckArray);
  // };

  //=====================Once all selected cards have been planted reset justPlanted bool=====================
  useEffect(() => {
    if (selectedCards.length === 0 && justPlanted) setJustPlanted(false);
  }, [justPlanted, selectedCards]);

  //=====================Once trade has been confirmed or canceled reset tradeStatus=====================
  useEffect(() => {
    if (
      selectedCards.length === 0 &&
      (tradeStatus === 'confirmTrade' || tradeStatus === 'cancelTrade')
    )
      setTradeStatus('notTrading');
  }, [tradeStatus, selectedCards]);

  //=====================Handle next turn button=====================
  const nextTurn = () => {
    if (gameStatus === 'flipped2Cards' && highlightedCards.length === 0)
      setGameStatus('plantSecondOrFlip2');
  };

  //=====================Display active game=====================
  return (
    <div className='ActiveGame'>
      <section className="info-cards">
        <div className="row">
          <InfoCard beanType="chili" cardCount={3} username="wheathin" />
          <InfoCard beanType="blue" cardCount={7} username="wheathin" />
        </div>
        <div className="row">
          <InfoCard beanType="chili" cardCount={3} username="wheathin" />
          <InfoCard beanType="blue" cardCount={7} username="wheathin" />
        </div>
        <div className="row">
          <InfoCard beanType="chili" cardCount={3} username="wheathin" />
          <InfoCard beanType="blue" cardCount={7} username="wheathin" />
        </div>
      </section>
      <section>
        <Deck
          gameStatus={gameStatus}
          highlightedCards={highlightedCards}
          justPlanted={justPlanted}
          selectedCards={selectedCards}
          setGameStatus={setGameStatus}
          setHighlightedCards={setHighlightedCards}
          setSelectedCards={setSelectedCards}
          tradeStatus={tradeStatus}
        />
      </section>
      <section>
        <TradeTable
          highlightedCards={highlightedCards}
          justPlanted={justPlanted}
          selectedCards={selectedCards}
          setHighlightedCards={setHighlightedCards}
          setSelectedCards={setSelectedCards}
          setTradeStatus={setTradeStatus}
          tradeStatus={tradeStatus}
        />
      </section>
      <section>
        <BeanField
          highlightedCards={highlightedCards}
          justPlanted={justPlanted}
          myCoinCount={myCoinCount}
          position="left"
          selectedCards={selectedCards}
          setGameStatus={setGameStatus}
          setHighlightedCards={setHighlightedCards}
          setJustPlanted={setJustPlanted}
          setMyCoinCount={setMyCoinCount}
          setSelectedCards={setSelectedCards}
          tradeStatus={tradeStatus}
        />
        <BeanField
          highlightedCards={highlightedCards}
          justPlanted={justPlanted}
          myCoinCount={myCoinCount}
          position="right"
          selectedCards={selectedCards}
          setGameStatus={setGameStatus}
          setHighlightedCards={setHighlightedCards}
          setJustPlanted={setJustPlanted}
          setMyCoinCount={setMyCoinCount}
          setSelectedCards={setSelectedCards}
          tradeStatus={tradeStatus}
        />
      </section>
      <section>
        <PlayerHand
          gameStatus={gameStatus}
          highlightedCards={highlightedCards}
          justPlanted={justPlanted}
          myCoinCount={myCoinCount}
          selectedCards={selectedCards}
          setGameStatus={setGameStatus}
          setHighlightedCards={setHighlightedCards}
          setJustPlanted={setJustPlanted}
          setMyCoinCount={setMyCoinCount}
          setSelectedCards={setSelectedCards}
          setTradeStatus={setTradeStatus}
          tradeStatus={tradeStatus}
        />
      </section>
      <button
        className="next-turn"
        onClick={nextTurn}
      ></button>

      <h1 id='gameStatus'>{myCoinCount}</h1>

      <Instructions />
    </div>
  );
}

export default ActiveGame;
