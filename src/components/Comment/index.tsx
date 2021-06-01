import React, {FunctionComponent} from 'react'
import {HackerNewsComment} from '../../models/HackerNewsItem'
import {Container} from './styles'

interface CommantProps {
    comment: HackerNewsComment;
}

export const Comment:FunctionComponent<CommantProps> = (props) => {
    return(
        <Container><p>{props.comment?.text}</p></Container>
    );
}

export default Comment;