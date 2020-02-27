import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import Label from './label';

const { Option } = Select;

const ChartFilter = ({
  onChange,
  defaultValue,
}) => (
  <div className="chart-filter">
    <Label htmlFor="month" text="Month">
      <Select
        id="month"
        name="month"
        placeholder="Month"
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-100"
      >
        <Option value="">Select By Month</Option>
        <Option value="jan">January</Option>
        <Option value="feb">Feburary</Option>
        <Option value="mar">March</Option>
        <Option value="apr">April</Option>
        <Option value="may">May</Option>
        <Option value="jun">June</Option>
        <Option value="jul">July</Option>
        <Option value="aug">August</Option>
        <Option value="sep">September</Option>
        <Option value="oct">October</Option>
        <Option value="nov">November</Option>
        <Option value="dec">December</Option>
      </Select>
    </Label>
  </div>
);

ChartFilter.defaultProps = {
  defaultValue: '',
  onChange: Function,
};

ChartFilter.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default ChartFilter;
