import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { screen,render } from '@testing-library/react'

test("pass functions to matchers", () => {
  const Hello = () => (
    <div>
      <h1> Congratulations folks!! </h1>
    </div>
  );
  render(<Hello />);
  expect(getByText(' Congratulations folks!! ')).toBeInTheDocument();
})
