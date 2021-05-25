import React, { useState } from 'react'
import { render } from 'react-dom'
import { GlobalStyle, Container } from './styles/GlobalStyle'
import 'regenerator-runtime/runtime'
import NewsList from './components/NewsList'
import MainWindow from './components/MainWindow'
import Axios from 'axios'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {

  const [currentUrl, setCurrentUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setUrl = (url: string) => {
    setIsLoading(true);
    setCurrentUrl(url);
  }

  const isFrameLoaded = () => {
    console.log("loaded");
    setIsLoading(false);
  }

  return (
    <Container>
      <GlobalStyle />
      <NewsList setCurrentUrl={setUrl} />
      <MainWindow url={currentUrl} isLoading={isLoading} isError={isError} isFrameLoaded={isFrameLoaded}/>
    </Container>
  )
}

render(<App />, mainElement)
