import React,{ FunctionComponent } from 'react'
import {HackerNewsItem} from '../../models/HackerNewsItem'
import {Container} from './styles'



const NewsItem:FunctionComponent<HackerNewsItem> = (props) => {
    return(
        <Container>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Container>
    );
}

export default NewsItem;