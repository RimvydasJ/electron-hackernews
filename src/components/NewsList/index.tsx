import React, { useState, useEffect, FunctionComponent, Dispatch } from 'react'

import {Container} from './styles'
import { HackerNewsItem } from '../../models/HackerNewsItem'
import Api from '../../infrastructure/Api'
import NewsItem from '../NewsItem'

interface NewsListProps {
    setCurrentUrl:(url: string, title:string) => void;
}

const NewsList: FunctionComponent<NewsListProps> = (props) => {

    const [newsPosts, setNewsPosts] = useState<HackerNewsItem[] | []>([]);

    useEffect(() => {
        let fetchData = async () => {
            let stories = await Api.get_top_storie();
            setNewsPosts(stories);
        }

        fetchData();
    }, []);


    return (
        <Container>
            {
                newsPosts.map((item: HackerNewsItem) => (
                    <NewsItem item={item} setCurrentUrl={props.setCurrentUrl} key={item.key}/>)
                )
            }
        </Container>
    )
}

export default NewsList;