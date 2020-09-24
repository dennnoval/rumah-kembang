import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

test("Renders <App/> component correctly", () => {
	render(<App/>)
	screen.debug()
})