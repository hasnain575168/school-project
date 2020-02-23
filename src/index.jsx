import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// Styles
import 'antd/es/row/style';
import 'antd/es/col/style';
import 'antd/es/menu/style';
import 'antd/es/button/style';
import 'antd/es/typography/style';
import 'antd/es/notification/style';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('app'));
