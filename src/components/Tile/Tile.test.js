import React from 'react'
import ReactDOM from 'react-dom'
import { default as Tile } from './Tile'

describe('<Tile />', () => {
    it('renders a site tile area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Tile>No content</Tile>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
