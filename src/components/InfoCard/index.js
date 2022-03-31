import { useEffect, useRef } from 'react';
import { beans } from '../../beans';
import coinImage from '../../images/coin.jpg';
import { guid } from '../../utils/guid';
import './info-card.css';

// const InfoCard = ({ leftBeanCount, leftBeanType, rightBeanCount, rightBeanType, username }) => {
const InfoCard = ({ beanType, cardCount, username }) => {
  const coin = useRef(null);

  useEffect(() => {
    console.log(coin.current);
  }, [cardCount]);
  //set coinCount based on cardCount and beanType
  let coinCount = 0;

  while (cardCount >= beans[beanType].coinRequirements.at(cardCount)) {
    coinCount++;
  }

  const coins = Array(cardCount).fill().map((card) => <img alt="coin" className='coin-image' key={guid()} src={coinImage} />);

  return (
    <div className='info-card'>
      <div className="username">{username}</div>
      <div className="image-container">
        <img alt={beanType} className="card-image" src={beans[beanType].image} />
        <div className="coin-container">
          <img alt="coin" className="coin-image" key={guid()} ref={coin} src={coinImage} />
          <div className="card-count">{cardCount}</div>
        </div>
      </div>
      {/* {coins} */}
      <div className="coin-progress">
        {cardCount}/{beans[beanType].coinRequirements.at(coinCount)}
      </div>
    </div>
  );
}

export default InfoCard;
