import {HackerNewsItem} from '../models/HackerNewsItem'

const key = "hackernewsreader"


export const getSavedItems = ():HackerNewsItem[] | [] =>  {
    const newsItemsInString = localStorage.getItem(key);
    if(newsItemsInString){
        const result:HackerNewsItem[]|[] = JSON.parse(newsItemsInString) || [];
        return result;
    }
    return [];
}

export const saveItem = (item:HackerNewsItem) => {
    let items:HackerNewsItem[] = getSavedItems();
    items.push(item);
    localStorage.setItem(key,JSON.stringify(items));
}

export const removeItem = (url:string) => {
    let items:HackerNewsItem[] = getSavedItems();
    const index = items.findIndex(q=>q.url === url);
    items.splice(index, 1);
    localStorage.setItem(key,JSON.stringify(items));
}

export default {
    getSavedItems,
    saveItem
}