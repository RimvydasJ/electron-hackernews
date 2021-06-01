import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, MainFrame, MainHeader, LoaderContainer, MainFrameContainer,CommentFrame } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faClipboard, faTrash } from '@fortawesome/free-solid-svg-icons'
import { PulseLoader } from "react-spinners";
import { shell } from 'electron'
import * as CSS from 'csstype';
import { HackerNewsComment } from '../../models/HackerNewsItem'
import Comment from '../Comment'

interface MainWindowProps {
    url: string;
    isLoading: boolean;
    isError: boolean;
    isFrameLoaded: () => void;
    showWarning: boolean;
    title: string;
    reload: (url: string, title: string) => void;
    removeFavorite: (url: string) => void;
    isComments: boolean;
    comments: HackerNewsComment[] | [];
}

const MainWindow: FunctionComponent<MainWindowProps> = (props) => {
    let commentIconStyle: CSS.Properties = {
        display: 'none',
        width: '100%',
        height: '100%',
        border: 'none',
        zIndex: 2
    };

    let warningStyle: CSS.Properties = {
        display: 'none',
        position: 'absolute',
        zIndex: 1
    };

    !props.isLoading ? commentIconStyle.display = 'block' : commentIconStyle.display = 'none';
    !props.isLoading ? warningStyle.display = 'block' : warningStyle.display = 'none';

    const warningMessage = props.showWarning ? <p style={warningStyle}>We cannot open the url. Please click <FontAwesomeIcon icon={faClipboard} /></p> : null;
    const urlFrame = <iframe src={props.url} onLoad={() => props.isFrameLoaded()} style={commentIconStyle} />;
    return (
        <Container>
            {
                props.isLoading ? (<LoaderContainer> <PulseLoader />{urlFrame}</LoaderContainer>) :
                    (
                        props.url ? (
                            <MainFrameContainer>
                                <MainHeader>
                                    <div style={titleContainer}>
                                        <p style={titleStyle}>{props.title}</p>
                                    </div>
                                    <div style={iconContainer}>
                                        <FontAwesomeIcon icon={faSync} style={iconSyncStyle} onClick={() => props.reload(props.url, props.title)} />
                                        <FontAwesomeIcon icon={faClipboard} style={iconClipStyle} onClick={() => shell.openExternal(props.url)} />
                                        <FontAwesomeIcon icon={faTrash} style={iconClipStyle} onClick={() => props.removeFavorite(props.url)} />
                                    </div>
                                </MainHeader>
                                {
                                    props.isComments ?
                                        (<CommentFrame>
                                            {
                                                props.comments.map((comment:HackerNewsComment)=>(<Comment comment={comment}/>))
                                            }
                                        </CommentFrame>) :
                                        (
                                            <MainFrame>
                                                {warningMessage}
                                                {urlFrame}
                                            </MainFrame>
                                        )
                                }
                            </MainFrameContainer>
                        ) : <></>

                    )
            }
        </Container>
    )
}

let titleStyle: CSS.Properties = {
    marginLeft: '30px'
}

let titleContainer: CSS.Properties = {
    width: '50%',
}

let iconSyncStyle: CSS.Properties = {
    marginRight: '30px',
    cursor: 'pointer'
};

let iconClipStyle: CSS.Properties = {
    marginRight: '30px',
    cursor: 'pointer'
};

let iconContainer: CSS.Properties = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%'
}


export default MainWindow;