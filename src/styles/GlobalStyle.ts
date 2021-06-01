import { createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: white;
    line-height: 1.5;
    font-weight:400;
  }
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  overflow-y:hidden;
`

export const Main = styled.main`
  display:flex;
  flex-direction:row;
  height:100%;
`
export const Header = styled.header`
  height:30px;
`

export const MainNav = styled.nav`
  width:12%;
  border: 1px solid;
  display:flex;
  flex-direction:column;
  background-color:#FE6700;
`

export const MenuItem = styled.a`
  &:hover { background: #ff9045 }
  height:30px;
  padding:5px;
  text-align:center;
  margin-bottom:1px;
  cursor:pointer;
  width:100%;
  color:white;
`
