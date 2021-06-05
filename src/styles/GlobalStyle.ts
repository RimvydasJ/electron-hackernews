import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

// Main color #944BBB
// Light: #B07ACD
// DarkL #512768

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Lato;
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
  height:40px;
  background-color:#605770;
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  align-items:center;
`

export const MainNav = styled.nav`
  width:12%;
  border:none;
  border-top: 1px solid white;
  border-right:1px solid white;
  display:flex;
  flex-direction:column;
  background-color:#605770;
`

export const MenuItem = styled.a`
  &:hover { background: #9f8fba }
  height:40px;
  padding:5px;
  text-align:center;
  margin-bottom:1px;
  cursor:pointer;
  width:100%;
  color:white;
  font-size: 20px;
  margin-bottom: 10px;
`
export const MainButton = styled.a`
    text-decoration:none;
    background-color:#9f8fba;
    color:white;
    border-radius:10px;
    transition:all .1s;
    cursor:pointer;
    padding:5px 5px;
    height:30px;
    letter-spacing: 2px;
    font-weight: 400;
    margin-right: 30px;
    margin-top: 2px;
    margin-bottom: 2px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
  }

  &:active {
    transform: translateY (0);
    box-shadow: 0 5 px20px rgba(0,0,0,.2);
  }
`

export const SecondaryButton = styled.a`
  text-decoration:none;
  color:white;
  color:white;
  transition:all .1s;
  cursor:pointer;
  letter-spacing: 2px;
  margin-right: 10px;
  padding:5px 5px;
  border-bottom: none;
  height:30px;
  border-radius:10px;
  margin-top: 2px;
  margin-bottom: 2px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
    color:white;
    background-color:#9f8fba;
    
  }

  &:active {
    transform: translateY (0);
    box-shadow: 0 5 px20px rgba(0,0,0,.2);
    color:white;
    background-color:#9f8fba;
    border-bottom: none;
  }
`