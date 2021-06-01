import React, { FunctionComponent } from 'react'
import { HackerNewsItem } from '../../models/HackerNewsItem'
import { Container, 
    LeftContainer, 
    RightContainer, 
    HeaderDate, 
    HeaderScoreDate, 
    HeaderScore, 
    BodyUrl, 
    CommentContainer, 
    CommentCount, 
    TitleContainer,
    FavoriveContainer,
    FavoriteIcon,
    CommentIcon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComments } from '@fortawesome/free-regular-svg-icons'
import helper from '../../helper'
import * as CSS from 'csstype';
import {saveItem} from '../../infrastructure/storage'

interface NewsItemProps {
    item: HackerNewsItem;
    setCurrentUrl:(url: string, title:string, isComments:boolean) => void;
}


const NewsItem: FunctionComponent<NewsItemProps> = (props) => {
    const url = props.item.url ? new URL(props.item.url) : new URL("https://news.ycombinator.com/");

    const itemOnClick = () => {
        props.setCurrentUrl(props.item.url, props.item.title, false);
    }

    const commentOnClick = () =>{
        props.setCurrentUrl(props.item.url, props.item.title, true);
    }

    const date = new Date(props.item.date);

    return (
        <Container>
            <LeftContainer onClick={itemOnClick}>
                <HeaderScoreDate>
                    <HeaderScore>+{props.item.score}</HeaderScore>
                    <HeaderDate>{helper.formatDate(date)}</HeaderDate>
                </HeaderScoreDate>
                <TitleContainer>
                    <h5>{props.item.title}</h5>
                </TitleContainer>
                <BodyUrl>{url?.hostname}</BodyUrl>
            </LeftContainer>
            <RightContainer>
                <FavoriveContainer onClick={() => saveItem(props.item)}>
                    <FavoriteIcon><FontAwesomeIcon icon={faStar} size="xs"/></FavoriteIcon>
                </FavoriveContainer>
                <CommentContainer onClick={commentOnClick}>
                    <CommentIcon><FontAwesomeIcon icon={faComments} size="xs" /></CommentIcon>
                    <CommentCount>{props.item.commentCount}</CommentCount>
                </CommentContainer>
            </RightContainer>
        </Container>
    );
}



export default NewsItem;