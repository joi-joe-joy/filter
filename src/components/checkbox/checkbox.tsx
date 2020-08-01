import * as React from 'react';

interface Props {
  onCheckChange: (label: string) => void;
  label: string;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const {label} = props;
  const [isChecked, setCheck] = React.useState(false);

  const handleCheckChange = (): void => {
    const {onCheckChange, label} = props;
    setCheck(!isChecked);
    onCheckChange(label);
  }

  return (
    <span className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={handleCheckChange}
        />
        {label}
      </label>
    </span>
  );
}

export default Checkbox;
