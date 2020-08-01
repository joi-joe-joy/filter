import * as React from 'react';
import {connect} from 'react-redux';
import Checkbox from "../checkbox/checkbox";
import {LanguagesList} from "../../const";
import {ActionCreator} from "../../reducer/reducer";

interface Props {
  changeLanguage: (languages: string[]) => void;
}

const LanguageFilter: React.FC<Props> = (props: Props) => {
  let selectedCheckboxes: Set<string>;

  React.useEffect(() => {
    selectedCheckboxes = new Set();
  });

  const handleLangCheck = (label: string): void => {
    const {changeLanguage} = props;
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    changeLanguage([...selectedCheckboxes]);
  };

  return (
    <fieldset>
      {LanguagesList.map((label) => (
        <Checkbox
          label={label}
          onCheckChange={handleLangCheck}
          key={label}
        />
      ))}
    </fieldset>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeLanguage(languages) {
    dispatch(ActionCreator.changeLanguage(languages));
  }
});

export {LanguageFilter};
export default connect(null, mapDispatchToProps)(LanguageFilter);
