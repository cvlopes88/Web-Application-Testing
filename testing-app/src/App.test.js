import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


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

test('contains buttons', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/hit-button/i);
  getByTestId(/foul-button/i);
  getByTestId(/strike-button/i);
  getByTestId(/ball-button/i);



})