import styled from 'styled-components'


export const Container = styled.div`
   display:flex;
   width:80%;
   overflow:hidden;
   height:100%;
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
    box-shadow:0px 2px 1px -1px grey;
    z-index:999;
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
`

export const WarningMessage = styled.p`
    position:absolute;
    z-index:1
`
