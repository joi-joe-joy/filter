import * as React from 'react';
import {connect} from 'react-redux';
import {getFilteredLectures} from "../../reducer/selectors";
import {Card as CardInterface} from "../../types";
import Card from "../card/card";

interface Props {
  cardsList: CardInterface[];
};

const CardsList: React.FC<Props> = (props: Props) => {
  const {cardsList} = props;
  return (
    <div style={{display: `flex`, flexWrap: `wrap`}}>
      {cardsList.map((item) => (
        <Card
          key={item.id}
          card={item}
        />
      ))}
      {!cardsList.length && <div style={{margin: `10px`}}>No topics</div>}
    </div>
  )
};

const mapStateToProps = (state) => ({
  cardsList: getFilteredLectures(state)
});

export {CardsList};
export default connect(mapStateToProps)(CardsList);