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
  const [currentTitle, setCurrentTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  const setUrl = (url: string, title:string) => {
    setCurrentTitle(title);
    setIsWarning(false);
    setIsLoading(true);
    setCurrentUrl(url);
  }

  const isFrameLoaded = () => {
    setTimeout(() => {
      setIsWarning(true);
    }, 1000);
    setIsLoading(false);
  }

  return (
    <Container>
      <GlobalStyle />
      <NewsList setCurrentUrl={setUrl} />
      <MainWindow 
        url={currentUrl} 
        isLoading={isLoading} 
        isError={isError} 
        isFrameLoaded={isFrameLoaded} 
        showWarning={isWarning} 
        title={currentTitle}
        reload={setUrl}/>
    </Container>
  )
}

render(<App />, mainElement)
