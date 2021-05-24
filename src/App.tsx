import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle,Container } from './styles/GlobalStyle'
import 'regenerator-runtime/runtime'
import NewsList from './components/NewsList'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <NewsList />
    </Container>
  )
}

render(<App />, mainElement)
