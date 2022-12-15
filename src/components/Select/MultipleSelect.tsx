import React from 'react'
import Select from 'react-select';
import { Option } from '../../interfaces';

type MultipleSelectProps = {
  value?: Option[] | Option;
  defaultValue?: Option[];
  isMulti?: boolean;
  onChange: (option: Option[]) => void;
  options: Option[]
};

function MultipleSelect({ defaultValue = [], isMulti = false, onChange, ...props }: MultipleSelectProps) {
  return (
    <Select
      {...props}
      defaultValue={defaultValue}
      isMulti={isMulti}
      name="colors"
      onChange={(options) => onChange(options as Option[])}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  )
}

export default MultipleSelect
