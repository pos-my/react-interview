import React from 'react';
import ReactDOM from 'react-dom';
import Unfound from '../screens/redirect/Unfound';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Unfound />, div);
});
