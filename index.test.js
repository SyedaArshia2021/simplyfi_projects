import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { screen,render } from '@testing-library/react'
test("pass functions to matchers", () => {
  const Hello = () => (
    <div>
      Hello <span>world</span>
    </div>
  );
  const { getByText } = render(<Hello />);

  const getByTextWithMarkup = (text,string) => {
    getByText((content, node) => {
      const hasText = (node: HTMLElement) => node.textContent === text
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child as HTMLElement)
      )
      return hasText(node) && childrenDontHaveText
    })
  }
})
  getByTextWithMarkup('Hello world')
