import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    margin-bottom: 1%;
    background-color: #dedede;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    padding: 5px;
`

export const Header = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 10px;
`

export const HeaderScoreDate = styled.div `
    display:flex;
    flex-direction:row;
`

export const HeaderScore = styled.p`
    font-size: 11px;
`


export const HeaderDate = styled.p `
    font-size: 11px;
    margin-left: 5px;
    opacity:0.6;
`

export const BodyContainer = styled.div `
    display:flex;
    flex-direction:column;
`
export const TitleContainer = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 5px;
`

export const CommentContainer = styled.div `
    margin-left:8px;
    align-self: center;
`

export const CommentCount = styled.p`
    font-size:11px;
    opacity:0.6;
`

export const BodyUrl = styled.p `
    font-size:13px;
    opacity:0.6;
`