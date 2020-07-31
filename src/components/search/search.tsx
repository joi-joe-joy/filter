import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/reducer";

interface Props {
  getSearchText: (text: string) => void;
};

const Search: React.FC<Props> = (props: Props) => {

  const handleSearchText = (event) => {
    const {getSearchText} = props;
    let value = event.target.value;
    getSearchText(value);
  };

  return (
    <input type="search" name="search" placeholder="Search"
      onChange={handleSearchText}        
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSearchText(text) {
    dispatch(ActionCreator.getSearchText(text));
  }
});

export {Search};
export default connect(null, mapDispatchToProps)(Search);
