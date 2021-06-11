import Axios from 'axios'
import { HackerNewsItem, HackerNewsComment } from '../types'
const url: string = "https://hacker-news.firebaseio.com/v0/"

export async function get_stories(source:string="topstories"): Promise<HackerNewsItem[]> {
    var newsStories: HackerNewsItem[] = [];
    try {
        var response = await Axios.get(url + source + ".json");
        if (response.data) {
            for(var i=0; i < 20; i++){
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
    let comments: HackerNewsComment[] = [];
    try{
        for(let id of commentIds){
            let comment = await Axios.get(url + `/item/${id}.json`);
                if (comment.data) {
                    let hackerComment: HackerNewsComment = {
                            author: comment.data.by, 
                            key:comment.data.id,
                            text:comment.data.text,
                            date:new Date(comment.data.time*1000),
                            childComments:[]
                    };
                    if(comment.data.kids){
                        let childComments = await get_comments(comment.data.kids)
                        hackerComment.childComments = childComments;
                    }
                    comments.push(hackerComment);
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