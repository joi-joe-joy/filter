import * as React from 'react';
import Filter from "../filter/filter";
import CardsList from "../cards-list/cards-list";

const App = () => {
  return (
    <div>
      <Filter/>
      <CardsList/>
    </div>
  );
}

export default App;
