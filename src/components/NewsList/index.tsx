import React, { useState, useEffect } from 'react'

import {Container} from './styles'
import { HackerNewsItem } from '../../models/HackerNewsItem'
import Api from '../../infrastructure/Api'
import NewsItem from '../NewsItem'

const NewsList: React.FC = () => {

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
                    <NewsItem item={item}/>)
                )
            }
        </Container>
    )
}

export default NewsList;