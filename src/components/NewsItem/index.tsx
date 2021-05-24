import React, { FunctionComponent } from 'react'
import { HackerNewsItem } from '../../models/HackerNewsItem'
import { Container, Header, HeaderDate, HeaderScoreDate, HeaderScore, BodyUrl, BodyContainer, CommentContainer, CommentCount, TitleContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComments } from '@fortawesome/free-regular-svg-icons'
import helper from '../../helper'
import * as CSS from 'csstype';

interface NewsItemProps {
    item: HackerNewsItem;
}

const commentIconStyle: CSS.Properties = {
    marginLeft: '3px',
    alignSelf: 'center'
};

const NewsItem: FunctionComponent<NewsItemProps> = (props) => {

    const url = props.item.url ? new URL(props.item.url) : new URL("https://news.ycombinator.com/");
    return (
        <Container>
            <Header>
                <HeaderScoreDate>
                    <HeaderScore>+{props.item.score}</HeaderScore>
                    <HeaderDate>{helper.formatDate(props.item.date)}</HeaderDate>
                </HeaderScoreDate>
                <FontAwesomeIcon icon={faStar} size="xs" />
            </Header>
            <BodyContainer>
                <TitleContainer>
                    <h5>{props.item.title}</h5>
                    <CommentContainer>
                        <FontAwesomeIcon icon={faComments} size="xs" />
                        <CommentCount>{props.item.commentCount}</CommentCount>
                    </CommentContainer>
                </TitleContainer>
                <BodyUrl>{url?.hostname}</BodyUrl>
            </BodyContainer>
        </Container>
    );
}

export default NewsItem;