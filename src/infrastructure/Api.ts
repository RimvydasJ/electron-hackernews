import Axios from 'axios'
import { HackerNewsItem } from '../models/HackerNewsItem'
const url: string = "https://hacker-news.firebaseio.com/v0/"

export async function get_top_storie(): Promise<HackerNewsItem[]> {
    var newsStories: HackerNewsItem[] = [];
    try {
        var response = await Axios.get(url + "topstories.json");
        if (response.data) {
            for(var i=0; i < 20; i++){
                var newsItem = await Axios.get(url + `/item/${response.data[i]}.json`);
                if (newsItem.data) {
                    console.log(newsItem.data)
                    newsStories.push({title: newsItem.data.title, description:newsItem.data.url});
                }
            }
        }
    }
    catch (ex) {
        return newsStories;
    }
    return newsStories;
}


export default {
    get_top_storie
}