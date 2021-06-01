import Axios from 'axios'
import { HackerNewsItem, HackerNewsComment } from '../models/HackerNewsItem'
const url: string = "https://hacker-news.firebaseio.com/v0/"

export async function get_stories(source:string="topstories"): Promise<HackerNewsItem[]> {
    var newsStories: HackerNewsItem[] = [];
    try {
        var response = await Axios.get(url + source + ".json");
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
                            key:i,
                            commentIds: newsItem.data.kids
                        });
                }
            }
        }
    }
    catch (ex) {
        return newsStories;
    }
    return newsStories;
}

export async function get_comments(commentIds:number[]): Promise<HackerNewsComment[]> {
    var comments: HackerNewsComment[] = [];
    try{
        for(var id of commentIds){
            var comment = await Axios.get(url + `/item/${id}.json`);
                if (comment.data) {
                    comments.push(
                        {
                            author: comment.data.by, 
                            key:comment.data.id,
                            text:comment.data.text,
                            date:new Date(comment.data.time*1000)
                        });
                } 
        }
    }
    catch(ex){
        console.log(ex);
    }
    return comments;
}


export default {
    get_stories,
    get_comments
}