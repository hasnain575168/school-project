import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';

const Label = ({
  text,
  htmlFor,
  children,
}) => (
  <label htmlFor={htmlFor} className="label">
    <Typography.Text className="label__text">{text}</Typography.Text>
    {children}
  </label>
);

Label.defaultProps = {
  text: '',
  htmlFor: '',
  children: {},
};

Label.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
