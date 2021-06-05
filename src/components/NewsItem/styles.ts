import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    margin-bottom: 1%;
    background-color: #DEDDE4;
    border-radius: 5px;
    display:flex;
    flex-direction:row;
    padding: 5px;
    color:black;
    border-top: 1px solid white;
`

export const LeftContainer = styled.a`
    width:91%;
    display:flex;
    flex-direction:column;
    cursor:pointer;
`
export const RightContainer = styled.div`
    width:9%;
    display:flex;
    flex-direction:column;
`

export const HeaderScoreDate = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom: 10px;
`

export const HeaderScore = styled.p`
    font-size: 11px;
`

export const HeaderDate = styled.p`
    font-size: 11px;
    margin-left: 5px;
    opacity:0.6;
`

export const FavoriveContainer = styled.a`
    display:flex;
    margin-left:10px;
    margin-bottom: 10px;
    cursor:pointer;
`

export const TitleContainer = styled.div`
    display:flex;
`

export const CommentContainer = styled.a`
    margin-left:10px;
    align-self: center;
    cursor:pointer;
`

export const CommentCount = styled.p`
    font-size:11px;
    opacity:0.6;
`

export const BodyUrl = styled.p`
    font-size:13px;
    opacity:0.6;
`
export const FavoriteIcon = styled.div`
    &:hover { color: blue ;}
`
export const CommentIcon = styled.div`
    &:hover {color: red;}
`