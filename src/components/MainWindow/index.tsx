import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, MainFrame, MainHeader, LoaderContainer, MainFrameContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { PulseLoader } from "react-spinners";
import { shell } from 'electron'
import * as CSS from 'csstype';

interface MainWindowProps {
    url: string;
    isLoading: boolean;
    isError: boolean;
    isFrameLoaded: () => void;
    showWarning: boolean;
    title:string;
    reload:(url: string, title:string) => void;
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

    const warningMessage = props.showWarning ? <p style={warningStyle}>We cannot open the url. Please click <FontAwesomeIcon icon={faClipboard}/></p> : null;
    const urlFrame = <iframe src={props.url} onLoad={() => props.isFrameLoaded()} style={commentIconStyle} />;
    return (
        <Container>
            {
                props.isLoading ? (<LoaderContainer> <PulseLoader />{urlFrame}</LoaderContainer>) :
                    (
                        props.url ? (
                            <MainFrameContainer>
                                <MainHeader>
                                    <p>{props.title}</p>
                                    <FontAwesomeIcon icon={faSync} style={iconStyle} onClick={() => props.reload(props.url,props.title)}/>
                                    <FontAwesomeIcon icon={faClipboard} style={iconStyle} onClick={() => shell.openExternal(props.url)}/>
                                </MainHeader>
                                <MainFrame>
                                    {warningMessage}
                                    {urlFrame}              
                                </MainFrame>
                            </MainFrameContainer>
                        ) : <></>

                    )
            }
        </Container>
    )
}

let iconStyle: CSS.Properties = {
    marginRight:'2%'
};



export default MainWindow;