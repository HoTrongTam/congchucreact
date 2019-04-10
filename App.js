

import React, { Component } from 'react';
import { registerScreens } from './src/navigation/registerScreen';
import { startApp } from './src/navigation/root';

export default class App extends Component {
  constructor(props) {
    super(props);
    registerScreens();
    startApp();
  }
}
