import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { screen,render } from '@testing-library/react'
test("pass functions to matchers", () => {
  const Hello = () => (
    <div>
      <h1>
        Congratulations folks!!
      </h1>
    </div>
  );
  const { getByText } = render(<Hello />);

  getByText((content, node) => {
    const hasText = node => node.textContent === "Congratulations folks!!";
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
});
