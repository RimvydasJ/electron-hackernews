export interface HackerNewsItem {
    title: string;
    url: string;
    score: number;
    date:Date;
    commentCount: number;
    commentIds: [];
    key: number;
}

export interface HackerNewsComment{
    author:string;
    text:string;
    date:Date;
    key:number;
    childComments:HackerNewsComment[];
}