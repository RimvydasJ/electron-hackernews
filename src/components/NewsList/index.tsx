import React, { useState, useEffect, FunctionComponent, Dispatch } from 'react'

import {Container} from './styles'
import { HackerNewsItem } from '../../models/HackerNewsItem'
import Api from '../../infrastructure/Api'
import NewsItem from '../NewsItem'

interface NewsListProps {
    setCurrentUrl:(url: string, title:string) => void;
    newsPosts:HackerNewsItem[] | [];
}

const NewsList: FunctionComponent<NewsListProps> = (props) => {
    return (
        <Container>
            {
                props.newsPosts?.map((item: HackerNewsItem) => (
                    <NewsItem item={item} setCurrentUrl={props.setCurrentUrl} key={item.key}/>)
                )
            }
        </Container>
    )
}

export default NewsList;