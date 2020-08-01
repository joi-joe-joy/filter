import * as React from 'react';
import {connect} from 'react-redux';
import Checkbox from "../checkbox/checkbox";
import {LevelsList} from "../../const";
import {ActionCreator} from "../../reducer/reducer";

interface Props {
  changeLevel: (levels: string[]) => void;
}

const LevelFilter: React.FC<Props> = (props: Props) => {
  let selectedCheckboxes: Set<string>;

  React.useEffect(() => {
    selectedCheckboxes = new Set();
  });

  const handleLevelCheck = (label: string): void => {
    const {changeLevel} = props;
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    changeLevel([...selectedCheckboxes]);
  };

  return (
    <fieldset>
      {LevelsList.map((label) => (
        <Checkbox
          label={label}
          onCheckChange={handleLevelCheck}
          key={label}
        />
      ))}
    </fieldset>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeLevel(levels) {
    dispatch(ActionCreator.changeLevel(levels));
  }
});

export {LevelFilter};
export default connect(null, mapDispatchToProps)(LevelFilter);
