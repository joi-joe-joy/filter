import * as React from 'react';
import {Card as CardInterface} from "../../types";

interface Props {
  card: CardInterface;
};

const Card: React.FC<Props> = (props: Props) => {
  const {card} = props;
  return (
    <div style={{width: `300px`, border: `1px solid #000`, margin: `10px`, padding: `0 15px`}}>
      <h3>{card.title}</h3>
      <h4>{card.author}</h4>
      <p>{card.level} / {card.language}</p>
    </div>
  )
}

export default Card;