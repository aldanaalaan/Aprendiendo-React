import ReactDOM from 'https://esm.sh/react-dom/client';
import react from 'https://esm.sh/react';

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);
const button1 = react.createElement(
  'button',
  { 'data-id': '123' },
  'Me gusta 1'
);
const button2 = react.createElement(
  'button',
  { 'data-id': '456' },
  'Me gusta 2'
);
const button3 = react.createElement(
  'button',
  { 'data-id': '789' },
  'Me gusta 3'
);
const div = react.createElement(react.Fragment, null, [
  button1,
  button2,
  button3,
]);

root.render(div);
