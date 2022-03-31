import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { beans } from '../../beans';
import coinImage from '../../images/coin.jpg';
import leftFieldImage from '../../images/1stBeanField.PNG';
import rightFieldImage from '../../images/2ndBeanField.PNG';
import './beanfield.css';

const BeanField = ({
  highlightedCards,
  justPlanted,
  myCoinCount,
  position,
  selectedCards,
  setHighlightedCards,
  setJustPlanted,
  setMyCoinCount,
  setSelectedCards,
  tradeStatus,
}) => {
  const [beanType, setBeanType] = useState('');
  const [cardCount, setCardCount] = useState(0);
  const [coinCount, setCoinCount] = useState(0);
  const [coinTarget, setCoinTarget] = useState(0);
  
  const coinReq = beanType ? beans[beanType].coinRequirements : '';

  useEffect(() => {
    if (beanType && cardCount >= coinReq.at(coinCount) && coinCount < coinReq.length)
      setCoinCount((prevCoinCount) => prevCoinCount + 1);

    setCoinTarget(coinReq.at(coinCount));
  }, [cardCount, coinReq, coinCount, beanType]);

  //=====================Handle harvest button=====================
  const harvest = () => {
    //Update player coin total
    setMyCoinCount(myCoinCount + coinCount);
    //Reset beanfield to empty
    setBeanType('');
    setCardCount(0);
  };

  //=====================Handle plant button=====================
  const plant = () => {
    if (selectedCards.length > 0) {
      let allowPlant = true;

      if (tradeStatus === 'trading') {
        alert('Finish trade before planting');
        //Handle planting when beanField is empty
      } else if (beanType === '') {
        //Make sure all selected cards are the same type
        const firstCard = selectedCards.at(0);
        allowPlant = [...selectedCards].every((card) => card === firstCard);

        if (allowPlant) {
          setBeanType(firstCard);
          setCardCount(selectedCards.length);
          setJustPlanted(true);
        } else {
          alert('All selected cards must match the beanfield');
        }
        //Handle planting when beanField is not empty
      } else {
        //Make sure all selected cards are the same type as the beanField
        allowPlant = [...selectedCards].every((card) => card === beanType);

        if (allowPlant) {
          setCardCount(cardCount + selectedCards.length);
          setJustPlanted(true);
        } else {
          alert('All selected cards must match the beanfield');
        }
      }
    }
  };
  //=====================Display beanField=====================

  return (
    <div
      className="bean-field"
      style={{
        position: 'absolute',
        left: `${50 + position === 'left' ? -7.8 : 1.7}vw`,
        top: '32vh',
        width: '6.5vw',
        height: `${cardCount + 19.1}vw`,
      }}
    >
      <button
        id="harvestButton"
        onClick={harvest}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '6.5vw',
          height: '2vw',
        }}
      >
        Harvest
      </button>

      <img
        alt=""
        id="fieldImage"
        src={position === 'left' ? leftFieldImage : rightFieldImage}
        style={{ left: 0, top: '2vw' }}
      />

      {(() => {
        const cards = [];

        for (let i = 0; i < cardCount; i++) {
          cards.push(
            <Card
              highlightedCards={highlightedCards}
              justPlanted={justPlanted}
              key={i}
              selectedCards={selectedCards}
              setHighlightedCards={setHighlightedCards}
              setSelectedCards={setSelectedCards}
              tradeStatus={tradeStatus}
              type={beanType}
              x={0}
              y={`5${i}vw`}
            />
          );
        }
        return cards;
      })()}
  
      {(() => {
        const coinImgs = [];

        for (let i = 0; i < coinCount; i++) {
          coinImgs.push(
            <img
              alt=""
              id="coinImage"
              key={i}
              src={coinImage}
              style={{
                left: `${1.6 * i}vw`,
                top: `${cardCount + 15.5}vw`,
              }}
            />
          );
        }

        return coinImgs;
      })()}

      <div
        id="coinProgress"
        style={{
          height: '1.5vw',
          left: 0,
          position: 'absolute',
          textAlign: 'center',
          top: `${cardCount + 14}vw`,
          width: '6.5vw',
        }}
      >
        {cardCount}/{coinTarget}
      </div>

      <button
        id="plantButton"
        onClick={plant}
        style={{
          height: '2vw',
          left: 0,
          position: 'absolute',
          top: `${cardCount + 17}vw`,
          width: '6.5vw',
        }}
      >
        Plant
      </button>
    </div>
  );
}

export default BeanField;
