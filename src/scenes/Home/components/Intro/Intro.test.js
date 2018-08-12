import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
});
