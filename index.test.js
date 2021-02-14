import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { screen,render } from '@testing-library/react'

test("pass functions to matchers", () => {
  const Hello = () => (
    <div>
      <h1> Congratulations folks!! </h1>
    </div>
  );
  const { getByText } = render(<Hello />);

  const getByTextWithMarkup = (text: string) => {
    getByText((content, node) => {
      const hasText = (node: HTMLElement) => node.textContent === Congratulations folks!! 
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child as HTMLElement)
      )
      return hasText(node) && childrenDontHaveText
    })
  }

  getByTextWithMarkup(' Congratulation folks!! ')
