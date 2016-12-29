import HelloWorld from './components/hello-world';
import React from 'react';
import ReactDom from 'react-dom'

ReactDom.render(
  <HelloWorld phrase="ES6"/>,
  document.querySelector('.root')
);
