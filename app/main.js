'use strict';

import React from 'react';
import Hello from './modules/hello.jsx';

var old = require('./component.js');

document.getElementById('hello').appendChild(old());

React.render(<Hello />, document.getElementById('app'));