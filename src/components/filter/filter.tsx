import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/reducer";
import LanguageFilter from "../language-filter/language-filter";
import LevelFilter from "../level-filter/level-filter";
import Search from "../search/search";

interface Props {
  reset: () => void;
}

const Filter: React.FC<Props> = (props: Props) => {
  const formRef: React.RefObject<HTMLFormElement> = React.useRef(null);

  const handleReset = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const {reset} = props;
    formRef.current.reset();
    reset();
  };

  return (
    <form style={{display: `flex`}} ref={formRef}>
      <LanguageFilter/>
      <LevelFilter/>
      <Search/>
      <button type="reset" onClick={handleReset}>Reset filters</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(ActionCreator.reset());
  }
});

export {Filter};
export default connect(null, mapDispatchToProps)(Filter);
