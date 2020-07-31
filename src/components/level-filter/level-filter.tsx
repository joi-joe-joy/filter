import * as React from 'react';
import {connect} from 'react-redux';
import Checkbox from "../checkbox/checkbox";
import {LevelsList} from "../../const";
import {ActionCreator} from "../../reducer/reducer";

interface Props {
  changeLevel: (levels: string[]) => void;
};

class LevelFilter extends React.PureComponent<Props> {
  private selectedCheckboxes: Set<string>;

  constructor(props) {
    super(props);
    this.handleLevelCheck = this.handleLevelCheck.bind(this);
  }

  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  }
  
  handleLevelCheck(label: string) {
    const {changeLevel} = this.props;
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    changeLevel([...this.selectedCheckboxes]);
  }

  render() {
    return (
      <fieldset>
        {LevelsList.map((label) => (
          <Checkbox
            label={label}
            onCheckChange={this.handleLevelCheck}
            key={label}
          />
        ))}
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLevel(levels) {
    dispatch(ActionCreator.changeLevel(levels));
  }
});

export {LevelFilter};
export default connect(null, mapDispatchToProps)(LevelFilter);