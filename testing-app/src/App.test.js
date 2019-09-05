import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard, { hitScore, foulHit } from './Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test("constains numbers of strikes and balls", () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i)
});


// test('board reset to 0 when hit is recorded', () => {
//   expect(hitScore(2)).not.toBe(1);
  
// });


// test('adds 1 to strike', () => {
//   expect(foulHit(1)).toBe(2);
// });