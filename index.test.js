import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(function(done) {
    JSDOM.fromFile('/var/lib/jenkins/workspace/job1/index.html')
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    .then((dom) => {
      container = dom.window.document.body
    })
    .then(done ,done)
  })

  it('renders a heading element', () => {
    expect(getByText(container, ' Congratulations folks!! ')).toBeInTheDocument()
    debug()
  })
})
