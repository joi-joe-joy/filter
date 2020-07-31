import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/reducer";
import LanguageFilter from "../language-filter/language-filter";
import LevelFilter from "../level-filter/level-filter";
import Search from "../search/search";

interface Props {
  reset: () => void;
}

class Filter extends React.PureComponent<Props> {
  private formRef: React.RefObject<HTMLFormElement>;
  constructor(props: Props) {
    super(props);
    this.formRef = React.createRef();
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    const {reset} = this.props;
    this.formRef.current.reset();
    reset();
  }

  render(): React.ReactNode {
    return (
      <form style={{display: `flex`}} ref={this.formRef}>
        <LanguageFilter/>
        <LevelFilter/>
        <Search/>
        <button type="reset" onClick={this.handleReset}>Reset filters</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(ActionCreator.reset());
  }
});

export {Filter};
export default connect(null, mapDispatchToProps)(Filter);
