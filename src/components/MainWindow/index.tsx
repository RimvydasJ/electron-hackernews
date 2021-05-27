import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, MainFrame } from './styles'
import { PulseLoader } from "react-spinners";
import * as CSS from 'csstype';

interface MainWindowProps {
    url: string;
    isLoading: boolean;
    isError: boolean;
    isFrameLoaded: (element:React.SyntheticEvent<HTMLIFrameElement, Event>) => void;
}

const MainWindow: FunctionComponent<MainWindowProps> = (props) => {
    const commentIconStyle: CSS.Properties = {
        display: 'none',
        width:'100%',
        height: '100%',
        border:'none'
    };
    !props.isLoading ? commentIconStyle.display = 'block' : 'none';
    return (
        <Container>
            <>
                {props.isLoading ?
                    <PulseLoader /> :
                   null
                }
                <iframe src={props.url} onLoad={(element) => props.isFrameLoaded(element)} style={commentIconStyle}/>
            </>

        </Container>
    )
}

export default MainWindow;