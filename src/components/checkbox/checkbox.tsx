import * as React from 'react';

interface Props {
  onCheckChange: (label: string) => void;
  label: string;
};

interface State {
  isChecked: boolean;
};

class Checkbox extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange() {
    const {onCheckChange, label} = this.props;
    this.setState(({isChecked}) => ({
        isChecked: !isChecked,
    }));
    onCheckChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <span className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.handleCheckChange}
          />
          {label}
        </label>
      </span>
    );
  }
}

export default Checkbox;