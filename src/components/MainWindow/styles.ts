import styled from 'styled-components'


export const Container = styled.div`
   display:flex;
   width:80%;
   overflow:hidden;
   height:100%;
   background-color:#DEDDE4;
   border-top: 1px solid white;
`

export const LoaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`

export const MainFrameContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const MainHeader = styled.div`
    display:flex;
    width:100%;
    height:30px;
    border:none;
    justify-content:space-between;
    align-items:center;
    background-color:lightgrey;
    border-bottom: 1px solid white;
    z-index:999;
    background-color:#DEDDE4;
`

export const MainFrame = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:96%;
    width:100%;
`
export const CommentFrame = styled.div`
    height:100%;
    margin-top:5px;
    overflow-y:scroll;
`

export const WarningMessage = styled.p`
    position:absolute;
    z-index:1
`
