import * as React from 'react';
import {connect} from 'react-redux';
import Checkbox from "../checkbox/checkbox";
import {LanguagesList} from "../../const";
import {ActionCreator} from "../../reducer/reducer";

interface Props {
  changeLanguage: (languages: string[]) => void;
}

class LanguageFilter extends React.PureComponent<Props> {
  private selectedCheckboxes: Set<string>;

  constructor(props: Props) {
    super(props);
    this.handleLangCheck = this.handleLangCheck.bind(this);
  }

  componentDidMount(): void {
    this.selectedCheckboxes = new Set();
  }

  handleLangCheck(label: string): void {
    const {changeLanguage} = this.props;
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    changeLanguage([...this.selectedCheckboxes]);
  }

  render(): React.ReactNode {
    return (
      <fieldset>
        {LanguagesList.map((label) => (
          <Checkbox
            label={label}
            onCheckChange={this.handleLangCheck}
            key={label}
          />
        ))}
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLanguage(languages) {
    dispatch(ActionCreator.changeLanguage(languages));
  }
});

export {LanguageFilter};
export default connect(null, mapDispatchToProps)(LanguageFilter);
