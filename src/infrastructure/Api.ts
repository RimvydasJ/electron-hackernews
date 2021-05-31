import Axios from 'axios'
import { HackerNewsItem } from '../models/HackerNewsItem'
const url: string = "https://hacker-news.firebaseio.com/v0/"

export async function get_top_storie(): Promise<HackerNewsItem[]> {
    var newsStories: HackerNewsItem[] = [];
    try {
        var response = await Axios.get(url + "topstories.json");
        if (response.data) {
            for(var i=0; i < 10; i++){
                var newsItem = await Axios.get(url + `/item/${response.data[i]}.json`);
                if (newsItem.data) {
                    newsStories.push(
                        {
                            title: newsItem.data.title, 
                            url:newsItem.data.url, 
                            date:new Date(newsItem.data.time*1000), 
                            score:newsItem.data.score,
                            commentCount: newsItem.data.kids?.length,
                            key:i
                        });
                }
            }
        }
    }
    catch (ex) {
        console.log(ex);
        return newsStories;
    }
    return newsStories;
}


export default {
    get_top_storie
}