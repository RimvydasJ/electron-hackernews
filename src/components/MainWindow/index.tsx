import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, MainFrame } from './styles'
import Axios from 'axios'
import { PulseLoader } from "react-spinners";
import * as CSS from 'csstype';

interface MainWindowProps {
    url: string;
    isLoading: boolean;
    isError: boolean;
    isFrameLoaded: () => void;
}



const MainWindow: FunctionComponent<MainWindowProps> = (props) => {
    const displayMessage = !props.isError ? <MainFrame src={props.url} onLoad={(e) => props.isFrameLoaded()} /> : <p>We cannot display the page</p>;
    const commentIconStyle: CSS.Properties = {
        display: 'none',
    };
    !props.isLoading ? commentIconStyle.display = 'block' : 'none';
    return (
        <Container>
            <>
                {props.isLoading ?
                    <PulseLoader /> :
                   null
                }
                <MainFrame src={props.url} onLoad={(e) => props.isFrameLoaded()} style={commentIconStyle}/>
            </>

        </Container>
    )
}

export default MainWindow;