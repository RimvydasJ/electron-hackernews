import React, {FunctionComponent} from 'react'
import {HackerNewsComment} from '../../models/HackerNewsItem'
import {Container} from './styles'
import * as CSS from 'csstype';

interface CommantProps {
    comment: HackerNewsComment;
    margin:number;
    key:number;
}

export const Comment:FunctionComponent<CommantProps> = (props) => {

    let commentStyle: CSS.Properties = {
        marginLeft:props.margin + "px"
    };

    return(
        <Container style={commentStyle}><p>{props.comment?.text}</p></Container>
    );
}

export default Comment;